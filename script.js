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
    const numSubjects = urlParams.get('numSubjects');
    let totalCredits = 0;
    let weightedGradePoints = 0;

    for (let i = 0; i < numSubjects; i++) {
        const credits = parseFloat(document.getElementById(`credits${i}`).value);
        const gradePoints = parseFloat(document.getElementById(`gradePoints${i}`).value);

        totalCredits += credits;
        weightedGradePoints += credits * gradePoints;
    }

    const sgpa = weightedGradePoints / totalCredits;
    document.getElementById("sgpaResult").innerText = `Your SGPA is: ${sgpa.toFixed(2)}`;
    setTimeout(() => {
        window.location.href = `sgpa_result.html?sgpa=${sgpa.toFixed(2)}`;
    }, 3000);
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
    const numSemesters = urlParams.get('numSemesters');
    let totalCredits = 0;
    let weightedGradePoints = 0;

    for (let i = 0; i < numSemesters; i++) {
        const credits = parseFloat(document.getElementById(`semCredits${i}`).value);
        const gradePoints = parseFloat(document.getElementById(`semGradePoints${i}`).value);

        totalCredits += credits;
        weightedGradePoints += credits * gradePoints;
    }

    const cgpa = weightedGradePoints / totalCredits;
    document.getElementById("cgpaResult").innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
    setTimeout(() => {
        window.location.href = `cgpa_result.html?cgpa=${cgpa.toFixed(2)}`;
    }, 3000);
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
