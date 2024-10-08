function generateFields() {
    const numSubjects = document.getElementById("numSubjects").value;
    const container = document.getElementById("subjectContainer");
    container.innerHTML = ''; // Clear the container before generating
 if (numSubjects > 0) {
        for (let i = 0; i < numSubjects; i++) {
            // Creating input fields for subject grades and credits
            const fieldset = document.createElement('fieldset');
            fieldset.className = 'form-group';

            // Grade input
            const gradeInput = document.createElement('input');
            gradeInput.setAttribute('type', 'number');
            gradeInput.setAttribute('placeholder', `Enter Grade Points for Subject ${i + 1}`);
            gradeInput.className = 'form-control grade';

            // Credits input
            const creditsInput = document.createElement('input');
            creditsInput.setAttribute('type', 'number');
            creditsInput.setAttribute('placeholder', `Enter Credits for Subject ${i + 1}`);
            creditsInput.className = 'form-control credit';

            fieldset.appendChild(gradeInput);
            fieldset.appendChild(creditsInput);
            container.appendChild(fieldset);
        }
        document.getElementById("calculateButton").style.display = 'block'; // Show the calculate button
    } else {
        container.innerHTML = '<p>Please enter a valid number of subjects.</p>';
    }
}

function calculateSGPA() {
    const grades = document.querySelectorAll('.grade');
    const credits = document.querySelectorAll('.credit');

    let totalCredits = 0;
    let weightedGrades = 0;

    for (let i = 0; i < grades.length; i++) {
        const gradeValue = parseFloat(grades[i].value);
        const creditValue = parseFloat(credits[i].value);

        if (!isNaN(gradeValue) && !isNaN(creditValue)) {
            weightedGrades += gradeValue * creditValue;
            totalCredits += creditValue;
        }
    }

    const sgpa = weightedGrades / totalCredits;

    if (!isNaN(sgpa)) {
        document.getElementById("showdata").innerHTML = `Your SGPA is: ${sgpa.toFixed(2)}`;
        document.getElementById("showdata").style.display = 'block';
        saveToHistory(sgpa.toFixed(2));
    } else {
        document.getElementById("showdata").innerHTML = "Please enter valid grades and credits.";
        document.getElementById("showdata").style.display = 'block';
    }
}
function saveToHistory(sgpa) {
    let history = localStorage.getItem("gradeHistory");
    history = history ? JSON.parse(history) : [];
    history.push({ sgpa: sgpa, date: new Date().toLocaleString() });
    localStorage.setItem("gradeHistory", JSON.stringify(history));
}

