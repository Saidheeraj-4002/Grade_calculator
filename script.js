function calculateSGPA() {
    let numSubjects = document.getElementById("numSubjects").value;
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= numSubjects; i++) {
        let gradePoints = parseFloat(document.getElementById(`subject${i}`).value);
        let credits = parseFloat(document.getElementById(`credit${i}`).value);

        // Check if inputs are valid
        if (isNaN(gradePoints) || isNaN(credits) || gradePoints < 0 || gradePoints > 10 || credits <= 0) {
            alert(`Please enter valid grade points (0-10) and credits for Subject ${i}`);
            return;
        }

        totalGradePoints += gradePoints * credits;
        totalCredits += credits;
    }

    if (totalCredits === 0) {
        alert("Total credits cannot be zero");
        return;
    }

    let sgpa = totalGradePoints / totalCredits;

    // Display SGPA result
    document.getElementById("showdata").innerText = `Your SGPA is: ${sgpa.toFixed(2)}`;
}
