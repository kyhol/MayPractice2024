window.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#form1");
  
    form.addEventListener("submit", function (e) {
      // go and collect user input from three input boxes and store them in js variables here
      let time = document.querySelector("#time").value;
      let task = document.querySelector("#task").value;
      let description = document.querySelector("#description").value;
  
      addTaskToList(time, task, description); //addBookToList() will create a new row in the table and insert title author and isbn there in the row
  
      e.preventDefault();
    });
  
    function addTaskToList(time, task, description) {
      if (time === "" || task === "" || description === "") {
        showAlert("No field should be empty", "error");
      } else {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${time}</td><td>${task}</td><td>${description}</td><td><button class="delete">X</button></td>`;
        // append the newly created row in the table body with id book-list
        document.querySelector("#data tbody").appendChild(row);
        clearFields();
        showAlert("Task successfully added!", "success");
      }
    }
    function clearFields() {
      document.querySelector("#time").value = "";
      document.querySelector("#task").value = "";
      document.querySelector("#description").value = "";
    }
    function showAlert(m, c) {
      let div = document.createElement("div");
      div.innerText = m;
      div.className = c;
      div.id = "box";
      document.querySelector("#notification").appendChild(div);
      // after 3 seconds remove this box...
      setTimeout(function () {
        document.querySelector("#box").remove();
      }, 3000);
    }
    document.querySelector("#data").addEventListener("click", function (e) {
      deleteBook(e.target);
    });
    function deleteBook(elemToDelete) {
      if (elemToDelete.className === "delete") {
        elemToDelete.parentElement.parentElement.remove();
        showAlert("Task removed successfully", "success");
      } else {
        showAlert("Wrong area clicked, please click on X", "error");
      }
    }
  });
  