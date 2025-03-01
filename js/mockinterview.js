document.addEventListener("DOMContentLoaded", function () {
    const mockQuestion = document.getElementById("mock-question");
    const Block = document.getElementById("interview-block");
    const closeBlock = document.querySelector(".close");
    const questionEle = document.getElementById("question");
    const answer = document.getElementById("answer");
    const forNextQBtn = document.getElementById("forNextQ");
    const progressEle = document.getElementById("progress");
    const Bio = document.getElementById("Bio");

    let questions = [];
    let currentQindex = 0;
    let answeredQ = 0;

    // Predefined questions for different designations
    const questionSet = {
        "frontend developer": [
            "Q. What are the core differences between React and Vue?",
            "Q. How do you optimize a webpage for better performance?",
            "Q. Can you explain the box model in CSS?",
            "Q. What is event delegation in JavaScript?",
            "Q. Describe a challenging frontend project you worked on."
        ],
        "backend developer": [
            "Q. What are the differences between SQL and NoSQL databases?",
            "Q. Explain how authentication works in Node.js.",
            "Q. What is middleware in Express.js?",
            "Q. How do you optimize database queries?",
            "Q. Can you explain microservices architecture?"
        ],
        "ui/ux designer": [
            "Q. What is the difference between UI and UX?",
            "Q. How do you conduct user research?",
            "Q. What tools do you use for wireframing and prototyping?",
            "Q. How do you ensure accessibility in your designs?",
            "Q. Tell me about a time you solved a UX problem."
        ],
        "data analyst": [
            "Q. How do you handle missing data in a dataset?",
            "Q. What is the difference between supervised and unsupervised learning?",
            "Q. How do you visualize large datasets effectively?",
            "Q. What tools do you use for data analysis?",
            "Q. Explain a real-world project where you analyzed data trends."
        ],
        "digital marketer": [
            "Q. What are the key SEO ranking factors?",
            "Q. How do you measure social media campaign success?",
            "Q. What is PPC advertising, and how does it work?",
            "Q. How do you create a customer persona?",
            "Q. Can you explain a successful digital marketing campaign you've worked on?"
        ]
    };

    // Function to get questions based on the user's job title
    function getQuestions(designation) {
        designation = designation.toLowerCase();
        return questionSet[designation] || [
            "Tell me about yourself.",
            "What are your key strengths?",
            "Why do you want this job?",
            "Describe a time you faced a challenge and how you handled it.",
            "Where do you see yourself in 5 years?"
        ];
    }

    // Show Block and start asking questions
    mockQuestion.addEventListener("click", function (event) {
        event.preventDefault();
        const designation = Bio.value.trim();
        if (designation === "") {
            alert("Please enter your job title before continuing.");
            return;
        }

        questions = getQuestions(designation);
        currentQindex = 0;
        answeredQ = 0;

        Block.style.display = "block";
        questionEle.textContent = questions[currentQindex];
        progressEle.textContent = `Question ${answeredQ + 1} of ${questions.length}`;
    });

    closeBlock.addEventListener("click", function () {
        Block.style.display = "none";
    });

    forNextQBtn.addEventListener("click", function () {
        const userAnswer = answer.value.trim();
        if (userAnswer === "") {
            alert("Please provide an answer before proceeding.");
            return;
        }
    
        answeredQ++;
        answer.value = "";
    
        if (answeredQ < questions.length) {
            currentQindex++;
            questionEle.textContent = questions[currentQindex];
            progressEle.textContent = `Question ${answeredQ + 1} of ${questions.length}`;
        } else {
            Block.style.display = "none";
            alert("Mock interview complete! Now your resume is downloading..");
        
            document.querySelector(".form-container").classList.add("active");
            document.querySelector(".popup").style.display = "flex";
        }
    });
    
});