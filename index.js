$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    infinite: true,
  });

  loadTodos();

  $("#addTodoBtn").click(function () {
    let todoText = $("#newTodo").val().trim();
    if (todoText !== "") {
      let todoItem =
        '<li><div class="todoCheckboxText"><input type="checkbox" class="todoCheckbox"><span class="todoText">' +
        todoText +
        '</span></div><button class="remove-btn">Видалити</button></li>';
      $("#todoList").append(todoItem);
      $("#newTodo").val("");
      saveTodos();
    }
  });

  $("#todoList").on("change", ".todoCheckbox", function () {
    let todoItem = $(this).parent();
    if ($(this).prop("checked")) {
      todoItem.addClass("completed");
    } else {
      todoItem.removeClass("completed");
    }
    saveTodos();
  });

  $("#todoList").on("click", ".remove-btn", function () {
    $(this).parent().remove();
    saveTodos();
  });

  $("#toggleListBtn").click(function () {
    $("#todoList").toggle();
  });

  function saveTodos() {
    let todos = [];
    $("#todoList li").each(function () {
      let todoText = $(this).find(".todoText").text();
      let isCompleted = $(this).find(".todoCheckbox").prop("checked");
      todos.push({ text: todoText, completed: isCompleted });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function loadTodos() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      todos.forEach(function (todo) {
        let todoItem =
          '<li><div class="todoCheckboxText"><input type="checkbox" class="todoCheckbox" ' +
          (todo.completed ? "checked" : "") +
          '><span class="todoText">' +
          todo.text +
          '</span></div><button class="remove-btn">Видалити</button></li>';
        $("#todoList").append(todoItem);
      });
    }
  }
});
$("#todoList").on("click", ".todoText", function () {
  let todoText = $(this).text();
  $("#todoModalBody").text(todoText);
  $("#todoModal").modal('show');
});