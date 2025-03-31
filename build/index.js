"use strict";

$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    infinite: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }]
  });
  loadTodos();
  $("#addTodoBtn").click(function () {
    var todoText = $("#newTodo").val().trim();
    if (todoText !== "") {
      var todoItem = '<li><div class="todoCheckboxText"><input type="checkbox" class="todoCheckbox"><span class="todoText">' + todoText + '</span></div><button class="remove-btn">Видалити</button></li>';
      $("#todoList").append(todoItem);
      $("#newTodo").val("");
      saveTodos();
    }
  });
  $("#todoList").on("change", ".todoCheckbox", function () {
    var todoItem = $(this).parent();
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
    var todos = [];
    $("#todoList li").each(function () {
      var todoText = $(this).find(".todoText").text();
      var isCompleted = $(this).find(".todoCheckbox").prop("checked");
      todos.push({
        text: todoText,
        completed: isCompleted
      });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function loadTodos() {
    var todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      todos.forEach(function (todo) {
        var todoItem = '<li><div class="todoCheckboxText"><input type="checkbox" class="todoCheckbox" ' + (todo.completed ? "checked" : "") + '><span class="todoText">' + todo.text + '</span></div><button class="remove-btn">Видалити</button></li>';
        $("#todoList").append(todoItem);
      });
    }
  }
});
$("#todoList").on("click", ".todoText", function () {
  var todoText = $(this).text();
  $("#todoModalBody").text(todoText);
  $("#todoModal").modal('show');
});