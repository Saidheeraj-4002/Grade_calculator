// Function to handle SGPA input submission
function submitNumSubjects() {
    const numSubjects = document.getElementById("numSubjects").value;
    if (numSubjects < 1) {
        alert("Please enter a valid number of subjects.");
        return;
    }
    window.location.href = `sgpa_calculation.html?numSubjects=${numSubjects}`;
}

// Function to calculate SGPA
function calculateSGPA() {
    const urlParams = new URLSearchParams(window.location.search);
    const numSubjects = parseInt(urlParams.get('numSubjects'));
    let totalCredits = 0;
    let weightedGradePoints = 0;

    for (let i = 0; i < numSubjects; i++) {
        const credits = parseFloat(document.getElementById(`credits${i}`).value);
        const gradePoints = parseFloat(document.getElementById(`gradePoints${i}`).value);

        totalCredits += credits;
        weightedGradePoints += credits * gradePoints;
    }

    const sgpa = weightedGradePoints / totalCredits;
    window.location.href = `sgpa_result.html?sgpa=${sgpa.toFixed(2)}`;
}

// Function to handle CGPA input submission
function submitNumSemesters() {
    const numSemesters = document.getElementById("numSemesters").value;
    if (numSemesters < 1) {
        alert("Please enter a valid number of semesters.");
        return;
    }
    window.location.href = `cgpa_calculation.html?numSemesters=${numSemesters}`;
}

// Function to calculate CGPA
function calculateCGPA() {
    const urlParams = new URLSearchParams(window.location.search);
    const numSemesters = parseInt(urlParams.get('numSemesters'));
    let totalCredits = 0;
    let weightedGradePoints = 0;

    for (let i = 0; i < numSemesters; i++) {
        const credits = parseFloat(document.getElementById(`semCredits${i}`).value);
        const gradePoints = parseFloat(document.getElementById(`semGradePoints${i}`).value);

        totalCredits += credits;
        weightedGradePoints += credits * gradePoints;
    }

    const cgpa = weightedGradePoints / totalCredits;
    window.location.href = `cgpa_result.html?cgpa=${cgpa.toFixed(2)}`;
}

// This function will handle displaying the SGPA result
function displaySGPA() {
    const urlParams = new URLSearchParams(window.location.search);
    const sgpa = urlParams.get('sgpa');
    document.getElementById("sgpaDisplay").innerText = `Your calculated SGPA is: ${sgpa}`;
}

// This function will handle displaying the CGPA result
function displayCGPA() {
    const urlParams = new URLSearchParams(window.location.search);
    const cgpa = urlParams.get('cgpa');
    document.getElementById("cgpaDisplay").innerText = `Your calculated CGPA is: ${cgpa}`;
}

// Dynamically create SGPA input fields based on number of subjects
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const numSubjects = urlParams.get('numSubjects');
    const subjectContainer = document.getElementById("subjectContainer");

    if (numSubjects) {
        for (let i = 0; i < numSubjects; i++) {
            const subjectDiv = document.createElement("div");
            subjectDiv.innerHTML = `
                <label for="credits${i}">Credits for Subject ${i + 1}:</label>
                <input type="number" id="credits${i}" min="0" />
                <label for="gradePoints${i}">Grade Points for Subject ${i + 1}:</label>
                <input type="number" id="gradePoints${i}" min="0" max="10" />
            `;
            subjectContainer.appendChild(subjectDiv);
        }
    }

    const semesterContainer = document.getElementById("semesterContainer");
    const numSemesters = urlParams.get('numSemesters');

    if (numSemesters) {
        for (let i = 0; i < numSemesters; i++) {
            const semesterDiv = document.createElement("div");
            semesterDiv.innerHTML = `
                <label for="semCredits${i}">Credits for Semester ${i + 1}:</label>
                <input type="number" id="semCredits${i}" min="0" />
                <label for="semGradePoints${i}">Grade Points for Semester ${i + 1}:</label>
                <input type="number" id="semGradePoints${i}" min="0" max="10" />
            `;
            semesterContainer.appendChild(semesterDiv);
        }
    }
});
