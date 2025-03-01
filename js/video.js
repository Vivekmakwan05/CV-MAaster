const videoInpt = document.getElementById("videoInpt");
const videoP = document.getElementById("videoP");

videoInpt.addEventListener("change", function (event) {
    let file = event.target.files[0];
    if (file) {
        let videoURL = URL.createObjectURL(file);
        videoP.src = videoURL;
        videoP.load(); // Ensure video is loaded
    }
});

function captureFrame(time) {
    return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        videoP.currentTime = time;
        videoP.addEventListener("seeked", function extract() {
            canvas.width = videoP.videoWidth || 640;
            canvas.height = videoP.videoHeight || 360;
            ctx.drawImage(videoP, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL("image/png"));
            videoP.removeEventListener("seeked", extract);
        });
    });
}

async function downloadPPT() {
    let pptx = new PptxGenJS();
    let timestamps = [1, 3, 5, 7, 10];

    for (let time of timestamps) {
        let slide = pptx.addSlide();
        slide.addText(`Frame at ${time} sec`, { x: 1, y: 0.5, fontSize: 18 });
        try {
            let frameImage = await captureFrame(time);
            slide.addImage({ data: frameImage, x: 1, y: 1, w: 6, h: 3 });
        } catch (error) {
            console.error("Error capturing frame:", error);
        }
    }
    pptx.writeFile("Presentation.pptx");
}document.getElementById("downloadPPT").addEventListener("click", downloadPPT);
