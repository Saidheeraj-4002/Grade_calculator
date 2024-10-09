function generateFields() {
    const numSubjects = document.getElementById("numSubjects").value;
    const container = document.getElementById("subjectContainer");
    container.innerHTML = ''; // Clear previous fields

    if (numSubjects > 0) {
        for (let i = 1; i <= numSubjects; i++) {
            container.innerHTML += `
                <div>
                    <label for="subject${i}">Subject ${i} Grade Point:</label>
                    <input type="number" id="subject${i}" min="0" max="10" required>
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

function calculateSGPA() {
    const numSubjects = document.getElementById("numSubjects").value;
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= numSubjects; i++) {
        const gradePoints = parseFloat(document.getElementById(`subject${i}`).value);
        const credits = parseFloat(document.getElementById(`credit${i}`).value);

        totalGradePoints += gradePoints * credits;
        totalCredits += credits;
    }

    const sgpa = totalGradePoints / totalCredits;
    
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

        totalGradePoints += sgpa * credits;
        totalCredits += credits;
    }

    const cgpa = totalGradePoints / totalCredits;

    // Calculate percentage equivalent of CGPA
    const percentage = (cgpa - 0.75) * 10;

    // Store the result in sessionStorage and redirect to the result page
    sessionStorage.setItem('cgpa', cgpa.toFixed(2));
    sessionStorage.setItem('percentage', percentage.toFixed(2));
    window.location.href = 'cgpa_result.html';
}

