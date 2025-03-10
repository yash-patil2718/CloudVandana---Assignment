// Store tasks in an array
let tasks = [];

// Populate the date dropdown with the next 7 days
function populateDates() {
    let dateSelect = document.getElementById("dateFilter");
    let taskDateSelect = document.getElementById("taskDate");
    let today = new Date();
    
    for (let i = 0; i < 7; i++) {
        let futureDate = new Date();
        futureDate.setDate(today.getDate() + i);
        
        let option = document.createElement("option");
        option.value = futureDate.toISOString().split('T')[0];
        option.textContent = futureDate.toDateString();
        
        dateSelect.appendChild(option);
        taskDateSelect.appendChild(option.cloneNode(true));
    }

    // Set default selected date as today
    dateSelect.value = today.toISOString().split('T')[0];
}

// Function to open the task form popup
function openTaskForm() {
    document.getElementById("taskFormPopup").style.display = "flex";
}

// Function to close the task form popup
function closeTaskForm() {
    document.getElementById("taskFormPopup").style.display = "none";
}

// Function to add a task
function addTask() {
    let taskName = document.getElementById("taskName").value.trim();
    let taskDetails = document.getElementById("taskDetails").value.trim();
    let selectedDate = document.getElementById("taskDate").value;

    if (taskName === "" || taskDetails === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Store task in array
    tasks.push({ name: taskName, details: taskDetails, date: selectedDate });

    // Refresh the displayed task list
    displayTasks();

    // Close popup and clear fields
    closeTaskForm();
    document.getElementById("taskName").value = "";
    document.getElementById("taskDetails").value = "";
}

// Function to display tasks based on selected date
function displayTasks() {
    let selectedDate = document.getElementById("dateFilter").value;
    let taskTableBody = document.getElementById("taskTableBody");

    // Clear existing tasks
    taskTableBody.innerHTML = "";

    // Filter tasks for selected date and display them
    tasks.filter(task => task.date === selectedDate).forEach((task, index) => {
        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = task.name;

        let detailsCell = document.createElement("td");
        detailsCell.textContent = task.details;

        let actionsCell = document.createElement("td");

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.classList.add("complete-btn");
        completeBtn.onclick = function () {
            row.style.textDecoration = "line-through";
        };

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = function () {
            tasks.splice(index, 1); // Remove from tasks array
            displayTasks(); // Refresh task list
        };

        actionsCell.appendChild(completeBtn);
        actionsCell.appendChild(removeBtn);

        row.appendChild(nameCell);
        row.appendChild(detailsCell);
        row.appendChild(actionsCell);

        taskTableBody.appendChild(row);
    });
}

// Initialize date dropdown and attach event listener
window.onload = function () {
    populateDates();
    document.getElementById("dateFilter").addEventListener("change", displayTasks);
};
