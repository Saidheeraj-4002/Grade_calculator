// Function to generate fields for SGPA calculation (Subjects)
function generateFields() {
    const numSubjects = document.getElementById("numSubjects").value;
    const container = document.getElementById("subjectContainer");
    container.innerHTML = ''; // Clear previous fields

    if (numSubjects > 0) {
        for (let i = 1; i <= numSubjects; i++) {
            container.innerHTML += `
                <div>
                    <label for="subject${i}">Subject ${i} Grade Point:</label>
                    <input type="number" id="subject${i}" min="0" max="10" step="0.01" required>
                    <label for="credit${i}">Subject ${i} Credits:</label>
                    <input type="number" id="credit${i}" min="1" required>
                </div>
            `;
        }
        document.getElementById("calculateButton").style.display = 'block';
    } else {
        alert("Please enter a valid number of subjects");
    }
}

// Function to calculate SGPA
function calculateSGPA() {
    const numSubjects = document.getElementById("numSubjects").value;
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= numSubjects; i++) {
        const gradePoints = parseFloat(document.getElementById(`subject${i}`).value);
        const credits = parseFloat(document.getElementById(`credit${i}`).value);

        if (isNaN(gradePoints) || isNaN(credits)) {
            alert(`Please enter valid grade points and credits for Subject ${i}`);
            return;
        }

        totalGradePoints += gradePoints * credits;
        totalCredits += credits;
    }

    const sgpa = (totalGradePoints / totalCredits).toFixed(2);
    
    // Store the result in sessionStorage and redirect to the result page
    sessionStorage.setItem('sgpa', sgpa);
    window.location.href = 'sgpa_result.html';
}

// Function to calculate CGPA for multiple semesters
function calculateCGPA() {
    const numSemesters = document.getElementById("numSemesters").value;
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= numSemesters; i++) {
        const sgpa = parseFloat(document.getElementById(`sgpa${i}`).value);
        const credits = parseFloat(document.getElementById(`credits${i}`).value);

        if (isNaN(sgpa) || isNaN(credits)) {
            alert(`Please enter valid SGPA and credits for Semester ${i}`);
            return;
        }

        totalGradePoints += sgpa * credits;
        totalCredits += credits;
    }

    const cgpa = (totalGradePoints / totalCredits).toFixed(2);

    // Calculate percentage equivalent of CGPA (Example: CGPA * 9.5)
    const percentage = (cgpa * 9.5).toFixed(2);

    // Store the result in sessionStorage and redirect to the result page
    sessionStorage.setItem('cgpa', cgpa);
    sessionStorage.setItem('percentage', percentage);
    window.location.href = 'cgpa_result.html';
}
