let skillCount = 4;

function addSkill() {
    skillCount++;
    const skillSection = document.getElementById("skill-section");

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.id = `Skill${skillCount}`;
    newInput.name = `Skill${skillCount}`;
    newInput.placeholder = `Skill-${skillCount}`;
    newInput.onkeyup = BuildResume;

    const newRow = document.createElement("div");
    newRow.className = "rows";
    newRow.appendChild(newInput);

    skillSection.appendChild(newRow);
}

function removeSkill() {
    if (skillCount > 4) {
        const skillSection = document.getElementById("skill-section");
        const lastRow = skillSection.lastElementChild;

        skillSection.removeChild(lastRow);
        skillCount--;
    } else {
        alert("Please Add skills.");
    }
}

let achivCount = 1;

function addAchievement() {
    achivCount++;
    const achivSection = document.getElementById("achiv-section");

    const AchivContainer = document.createElement("div");
    AchivContainer.className = "acont";

    const atitleRow = document.createElement("div");
    atitleRow.className = "rows";
    const ATitleInput = document.createElement("input");
    ATitleInput.type = "text";
    ATitleInput.id = `Title${achivCount}`;
    ATitleInput.name = `Title${achivCount}`;
    ATitleInput.placeholder = "Title";
    atitleRow.appendChild(ATitleInput);
    ATitleInput.onkeyup = BuildResume;

    const adescrpRow = document.createElement("div");
    adescrpRow.className = "rows";
    const ADescrpInput = document.createElement("input");
    ADescrpInput.type = "text";
    ADescrpInput.id = `Descrp${achivCount}`;
    ADescrpInput.name = `Descrp${achivCount}`;
    ADescrpInput.placeholder = "Description";
    adescrpRow.appendChild(ADescrpInput);
    ADescrpInput.onkeyup = BuildResume;

    AchivContainer.appendChild(atitleRow);
    AchivContainer.appendChild(adescrpRow);
    achivSection.appendChild(AchivContainer);
}


function removeAchievement() {
    if (achivCount > 1) {
        const achivSection = document.getElementById("achiv-section");
        achivSection.removeChild(achivSection.lastElementChild);
        achivCount--;
    } else {
        alert("At least one achievement is required.");
    }
}

let expCount = 1;

function addExperiance() {
    expCount++;
    const exSection = document.getElementById("experiance-section");

    const ExContainer = document.createElement("div");
    ExContainer.className = "excont";

    const extitleRow = document.createElement("div");
    extitleRow.className = "rows";
    const exTitleInput = document.createElement("input");
    exTitleInput.type = "text";
    exTitleInput.id = `ExTitle${expCount}`;
    exTitleInput.name = `ExTitle${expCount}`;
    exTitleInput.placeholder = "Title";
    exTitleInput.onkeyup = BuildResume;
    extitleRow.appendChild(exTitleInput);

    const companyRow = document.createElement("div");
    companyRow.className = "rows";
    const CompanyInput = document.createElement("input");
    CompanyInput.type = "text";
    CompanyInput.id = `Comp${expCount}`;
    CompanyInput.name = `Comp${expCount}`;
    CompanyInput.placeholder = "Company";
    CompanyInput.onkeyup = BuildResume;
    companyRow.appendChild(CompanyInput);

    const SdateRow = document.createElement("div");
    SdateRow.className = "rows";
    const SDateInput = document.createElement("input");
    SDateInput.type = "date";
    SDateInput.id = `Sdate${expCount}`;
    SDateInput.name = `Sdate${expCount}`;
    SDateInput.oninput = BuildResume;
    SdateRow.appendChild(SDateInput);

    const EdateRow = document.createElement("div");
    EdateRow.className = "rows";
    const EDateInput = document.createElement("input");
    EDateInput.type = "date";
    EDateInput.id = `Edate${expCount}`;
    EDateInput.name = `Edate${expCount}`;
    EDateInput.oninput = BuildResume;
    EdateRow.appendChild(EDateInput);

    const locnRow = document.createElement("div");
    locnRow.className = "rows";
    const LocnInput = document.createElement("input");
    LocnInput.type = "text";
    LocnInput.id = `Loc${expCount}`;
    LocnInput.name = `Loc${expCount}`;
    LocnInput.placeholder = "Location";
    LocnInput.onkeyup = BuildResume;
    locnRow.appendChild(LocnInput);

    const exdescrpRow = document.createElement("div");
    exdescrpRow.className = "rows";
    const ExDescrpInput = document.createElement("input");
    ExDescrpInput.type = "text";
    ExDescrpInput.id = `EDescrp${expCount}`;
    ExDescrpInput.name = `EDescrp${expCount}`;
    ExDescrpInput.placeholder = "Description";
    ExDescrpInput.onkeyup = BuildResume;
    exdescrpRow.appendChild(ExDescrpInput);

    ExContainer.appendChild(extitleRow);
    ExContainer.appendChild(companyRow);
    ExContainer.appendChild(SdateRow);
    ExContainer.appendChild(EdateRow);
    ExContainer.appendChild(locnRow);
    ExContainer.appendChild(exdescrpRow);
    exSection.appendChild(ExContainer);
}

function removeExperiance() {
    if (expCount > 1) {
        const exSection = document.getElementById("experiance-section");
        exSection.removeChild(exSection.lastElementChild);
        expCount--;
    } else {
        alert("At least one Experiance is required.");
    }
}

let projectCount = 1;

function addProject() {
    projectCount++;
    const projectSection = document.getElementById("project-section");

    const ProjectContainer = document.createElement("div");
    ProjectContainer.className = "pcont";

    const pnameRow = document.createElement("div");
    pnameRow.className = "rows";
    const PnameInput = document.createElement("input");
    PnameInput.type = "text";
    PnameInput.id = `Pname${projectCount}`;
    PnameInput.name = `Pname${projectCount}`;
    PnameInput.placeholder = "Project Name";
    PnameInput.onkeyup = BuildResume;
    pnameRow.appendChild(PnameInput);

    const plinkRow = document.createElement("div");
    plinkRow.className = "rows";
    const PlinkInput = document.createElement("input");
    PlinkInput.type = "text";
    PlinkInput.id = `Plink${projectCount}`;
    PlinkInput.name = `Plink${projectCount}`;
    PlinkInput.placeholder = "Project Link";
    PlinkInput.onkeyup = BuildResume;
    plinkRow.appendChild(PlinkInput);

    const pdescrpRow = document.createElement("div");
    pdescrpRow.className = "rows";
    const PDescrpInput = document.createElement("input");
    PDescrpInput.type = "text";
    PDescrpInput.id = `PDescrp${projectCount}`;
    PDescrpInput.name = `PDescrp${projectCount}`;
    PDescrpInput.placeholder = "Project Description";
    PDescrpInput.onkeyup = BuildResume;
    pdescrpRow.appendChild(PDescrpInput);

    ProjectContainer.appendChild(pnameRow);
    ProjectContainer.appendChild(plinkRow);
    ProjectContainer.appendChild(pdescrpRow);
    projectSection.appendChild(ProjectContainer);
}

function removeProject() {
    if (projectCount > 1) {
        const projectSection = document.getElementById("project-section");
        projectSection.removeChild(projectSection.lastElementChild);
        projectCount--;
    } else {
        alert("At least one Project is required.");
    }
}

function BuildResume() {

    document.getElementById("previewName").innerText =
        `${document.getElementById("Firstname").value} ${document.getElementById("Lastname").value}`;
    document.getElementById("previewBio").innerText = document.getElementById("Bio").value;
    document.getElementById("previewEmail").innerText = document.getElementById("email").value;
    document.getElementById("previewPhone").innerText = document.getElementById("phone").value;
    document.getElementById("previewAddress").innerText = document.getElementById("Addr").value;
    document.getElementById("previewLinkdin").innerText = document.getElementById("Linkdin").value
    document.getElementById("previewSummary").innerText = document.getElementById("Sumry").value;

    const skills = Array.from(document.querySelectorAll("#skill-section input")).map(input => input.value).filter(val => val);
    document.getElementById("previewSkills").innerHTML = skills.map(skill => `<li>${skill}</li>`).join("");

    const achievements = Array.from(document.querySelectorAll("#achiv-section input")).map(input => input.value).filter(val => val);
    document.getElementById("previewAchievements").innerHTML = achievements.map(ach => `<p>${ach}</p>`).join("");

    const projects = Array.from(document.querySelectorAll("#project-section input")).map(input => input.value).filter(val => val);
    document.getElementById("previewProjects").innerHTML = projects.map(proj => `<p>${proj}</p>`).join("");

    const EdSchool = document.getElementById("EdSchool").value;
    const EdDegree = document.getElementById("EdDegree").value;
    const EdsDate = document.getElementById("EdSdate").value;
    const EdeDate = document.getElementById("EdEdate").value;
    const EdLoc = document.getElementById("EdLoc").value;
    const EdDescrp = document.getElementById("EdDescrp").value;
    document.getElementById("previewEducation").innerText = `${EdSchool} | ${EdDegree}\n${EdsDate} | ${EdeDate}\n${EdLoc}\n${EdDescrp}`

    const experienceSections = document.querySelectorAll(".excont"); 
    const previewExperience = document.getElementById("previewExperience");
    previewExperience.innerHTML = ""; 

    experienceSections.forEach(section => {
        const expTitle = section.querySelector("input[name^='ExTitle']").value;
        const expCompany = section.querySelector("input[name^='Comp']").value;
        const Sdate = section.querySelector("input[name^='Sdate']").value;
        const Edate = section.querySelector("input[name^='Edate']").value;
        const Loc = section.querySelector("input[name^='Loc']").value;
        const expDesc = section.querySelector("input[name^='EDescrp']").value;

        if (expTitle || expCompany || Sdate || Edate || Loc || expDesc) {
            previewExperience.innerHTML += `
                    <p><strong>${expTitle}</strong> | ${expCompany}</p>
                    <p>${Sdate} - ${Edate}</p>
                    <p>${Loc}</p>
                    <p>${expDesc}</p>
                    <hr>
                `;
        }
    });

}

document.getElementById("inp-file").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const img = document.getElementById("profile-img");
            img.src = event.target.result;
            img.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});


