var _a;
// Function to get the value of an input or textarea element by its ID
function getValueById(id) {
    var element = document.getElementById(id);
    return element ? element.value : '';
}
// Function to generate the resume content
function generateResume() {
    var name = getValueById('name');
    var email = getValueById('email');
    var phone = getValueById('phone');
    var education = getValueById('education');
    var experience = getValueById('experience');
    var yearsExperience = getValueById('years');
    var skills = getValueById('skills');
    return "\n        <div id=\"resume\">\n            <h3 class=\"editable\" contenteditable=\"true\">".concat(name, "</h3>\n            <p><strong>Email:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(phone, "</span></p>\n            <h4>Education:</h4>\n            <p class=\"editable\" contenteditable=\"true\">").concat(education, "</p>\n            <h4>Experience:</h4>\n            <p class=\"editable\" contenteditable=\"true\">").concat(experience, "</p>\n            <p><strong>Years:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(yearsExperience, "</span></p>\n            <h4>Skills:</h4>\n            <p class=\"editable\" contenteditable=\"true\">").concat(skills, "</p>\n        </div>\n    ");
}
// Event listener for the form submission
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Generate and display the resume
    var resumeContent = generateResume();
    var resumeOutput = document.getElementById('resume-content');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }
    // Add this function in your script.ts
    function downloadResume() {
        var _a;
        var jsPDF = window.jspdf.jsPDF;
        var doc = new jsPDF();
        var resumeContent = ((_a = document.getElementById('resume-content')) === null || _a === void 0 ? void 0 : _a.innerText) || '';
        doc.text(resumeContent, 10, 10);
        doc.save('resume.pdf');
    }
    // Add a button for downloading resume
    document.body.insertAdjacentHTML('beforeend', "<button id=\"download-resume\">Download Resume</button>");
    (_a = document.getElementById('download-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', downloadResume);
});
