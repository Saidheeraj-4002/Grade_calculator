function generateFields() {
    const numSubjects = document.getElementById('numSubjects').value;
    const subjectContainer = document.getElementById('subjectContainer');
    subjectContainer.innerHTML = ''; // Clear any existing fields

    if (numSubjects > 0) {
        for (let i = 0; i < numSubjects; i++) {
            const subjectDiv = document.createElement('div');
            subjectDiv.className = 'subject';

            subjectDiv.innerHTML = `
                <label for="subject${i}">Subject ${i + 1}:</label>
                <input type="text" id="subject${i}" placeholder="Subject Name" required />
                <label for="grade${i}">Grade:</label>
                <input type="number" id="grade${i}" min="0" max="100" placeholder="Grade (0-100)" required />
                <label for="credit${i}">Credits:</label>
                <input type="number" id="credit${i}" min="1" placeholder="Credits" required />
            `;
            subjectContainer.appendChild(subjectDiv);
        }

        document.getElementById('calculateButton').style.display = 'block'; // Show calculate button
    }
}

function calculateSGPA() {
    const numSubjects = document.getElementById('numSubjects').value;
    let totalCredits = 0;
    let weightedGrades = 0;

    for (let i = 0; i < numSubjects; i++) {
        const grade = parseFloat(document.getElementById(`grade${i}`).value);
        const credits = parseFloat(document.getElementById(`credit${i}`).value);
        
        // Check if the values are valid numbers
        if (!isNaN(grade) && !isNaN(credits) && grade >= 0 && grade <= 100 && credits > 0) {
            totalCredits += credits;
            weightedGrades += (grade * credits);
        } else {
            alert(`Please enter valid values for Subject ${i + 1}`);
            return; // Stop calculation if there's an invalid input
        }
    }

    const sgpa = totalCredits > 0 ? (weightedGrades / totalCredits).toFixed(2) : 0;
    document.getElementById('showdata').innerText = `SGPA: ${sgpa}`;
}
