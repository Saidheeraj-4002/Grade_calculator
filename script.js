function generateFields(type) {
    const numSubjects = document.getElementById('numSubjects') || document.getElementById('numSemesters');
    const inputFieldsDiv = document.getElementById('inputFields');
    inputFieldsDiv.innerHTML = ''; // Clear previous fields

    const num = parseInt(numSubjects.value);
    for (let i = 0; i < num; i++) {
        inputFieldsDiv.innerHTML += `
            <label for="credits${i}">Credits for Subject ${i + 1}:</label>
            <input type="number" id="credits${i}" required min="0">
            <label for="gradePoints${i}">Grade Points for Subject ${i + 1}:</label>
            <input type="number" id="gradePoints${i}" required min="0" max="4" step="0.1">
        `;
    }

    inputFieldsDiv.innerHTML += `<button onclick="calculate(${num}, '${type}')">Calculate ${type === 'sgpa' ? 'SGPA' : 'CGPA'}</button>`;
}

function calculate(num, type) {
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 0; i < num; i++) {
        const credits = parseFloat(document.getElementById(`credits${i}`).value);
        const gradePoints = parseFloat(document.getElementById(`gradePoints${i}`).value);

        if (isNaN(credits) || isNaN(gradePoints)) {
            alert("Please enter valid numbers for credits and grade points.");
            return; // Exit if input is invalid
        }

        totalCredits += credits;
        totalGradePoints += (gradePoints * credits);
    }

    const result = totalGradePoints / totalCredits;
    if (type === 'sgpa') {
        displayResult(result, 'sgpaResult', 'sgpa_result.html');
    } else {
        displayResult(result, 'cgpaResult', 'cgpa_result.html');
    }
}

function displayResult(result, resultDivId, resultPage) {
    const resultDiv = document.getElementById(resultDivId);
    resultDiv.innerHTML = `
        <h3>Your Result</h3>
        <p>${resultDivId === 'sgpaResult' ? 'SGPA' : 'CGPA'}: ${result.toFixed(2)}</p>
        <p>Percentage: ${(result * 10).toFixed(2)}%</p>
        <a href="${resultPage}">View Result Details</a>
    `;
}
