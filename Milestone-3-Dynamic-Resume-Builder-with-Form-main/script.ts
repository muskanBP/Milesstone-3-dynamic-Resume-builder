// Function to get the value of an input or textarea element by its ID
function getValueById(id: string): string {
    const element = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
    return element ? element.value : '';
}

// Function to generate the resume content
function generateResume(): string {
    const name = getValueById('name');
    const email = getValueById('email');
    const phone = getValueById('phone');
    const education = getValueById('education');
    const experience = getValueById('experience');
    const yearsExperience = getValueById('years');
    const skills = getValueById('skills');

    return `
        <div id="resume">
            <h3 class="editable" contenteditable="true">${name}</h3>
            <p><strong>Email:</strong> <span class="editable" contenteditable="true">${email}</span></p>
            <p><strong>Phone:</strong> <span class="editable" contenteditable="true">${phone}</span></p>
            <h4>Education:</h4>
            <p class="editable" contenteditable="true">${education}</p>
            <h4>Experience:</h4>
            <p class="editable" contenteditable="true">${experience}</p>
            <p><strong>Years:</strong> <span class="editable" contenteditable="true">${yearsExperience}</span></p>
            <h4>Skills:</h4>
            <p class="editable" contenteditable="true">${skills}</p>
        </div>
    `;
}

// Event listener for the form submission
document.getElementById('resume-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Generate and display the resume
    const resumeContent = generateResume();
    const resumeOutput = document.getElementById('resume-content');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }
    // Add this function in your script.ts
function downloadResume() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const resumeContent = document.getElementById('resume-content')?.innerText || '';

    doc.text(resumeContent, 10, 10);
    doc.save('resume.pdf');
}

// Add a button for downloading resume
document.body.insertAdjacentHTML('beforeend', `<button id="download-resume">Download Resume</button>`);
document.getElementById('download-resume')?.addEventListener('click', downloadResume);

});
