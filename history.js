window.onload = function() {
    const historyList = document.getElementById("gradeHistory");
    let history = localStorage.getItem("gradeHistory");
    history = history ? JSON.parse(history) : [];

    if (history.length > 0) {
        history.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `SGPA: ${item.sgpa} - Calculated on ${item.date}`;
            historyList.appendChild(li);
        });
    } else {
        historyList.innerHTML = "<p>No history available.</p>";
    }
};
