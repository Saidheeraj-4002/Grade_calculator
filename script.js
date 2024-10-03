// Function to generate input fields for subjects and credits
function generateFields() {
    let numSubjects = document.getElementById("numSubjects").value;
    let container = document.getElementById("subjectContainer");
    container.innerHTML = ''; // Clear the container first

    if (numSubjects > 0) {
        for (let i = 1; i <= numSubjects; i++) {
            // Create subject grade point input field
            let gradePointField = document.createElement("div");
            gradePointField.classList.add("form-group");
            gradePointField.innerHTML = `<label for="subject${i}">Subject ${i} Grade Point:</label>
                                         <input type="number" 
                                                class="form-control" 
                                                placeholder="Enter Grade Point for Subject ${i}" 
                                                id="subject${i}" 
                                                min="0" max="10" />`;
            container.appendChild(gradePointField);

            // Create subject credit input field
            let creditField = document.createElement("div");
            creditField.classList.add("form-group");
            creditField.innerHTML = `<label for="credit${i}">Subject ${i} Credits:</label>
                                     <input type="number" 
                                            class="form-control" 
                                            placeholder="Enter Credits for Subject ${i}" 
                                            id="credit${i}" 
                                            min="1" />`;
            container.appendChild(creditField);
        }

        // Show the "Calculate SGPA" button after fields are generated
        document.getElementById("calculateButton").style.display = 'block';
    } else {
        alert("Please enter a valid number of subjects");
    }
}

// Function to calculate SGPA
function calculateSGPA() {
    let numSubjects = document.getElementById("numSubjects").value;
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= numSubjects; i++) {
        let gradePoints = parseFloat(document.getElementById(`subject${i}`).value);
        let credits = parseFloat(document.getElementById(`credit${i}`).value);

        if (isNaN(gradePoints) || isNaN(credits) || gradePoints < 0 || credits <= 0) {
            alert("Please enter valid numbers for grade points and credits");
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


