describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("passes", () => {
    cy.visit("http://localhost:5173/");
  });

  it("після запиту на http://localhost:3000/todos повертається статус 200", () => {
    cy.request("http://localhost:3000/todos").its("status").should("eq", 200);
  });

  it("сторінка має заголовок TODO", () => {
    cy.contains("h1", "TODO").should("be.visible");
  });

  it("у поле для тексту можна ввести як цифри, так і букви", () => {
    cy.get('input[name="input-new-todo"]')
      .type("Test123")
      .should("have.value", "Test123");
  });

  it("після вписання тексту, та натискання на “Додати” отримаєте новий елемент у списку з потрібним текстом", () => {
    cy.get('input[name="input-new-todo"]').type("Нове завдання");
    cy.get('button[name="add-new-todo"]').contains("Додати").click();
    cy.contains("Нове завдання").should("be.visible");
  });

  it("після натискання на кнопку “Додати” без тексту, ви отримаєте помилку", () => {
    cy.window().then((win) => {
      cy.stub(win, "alert").callsFake((msg) => {
        expect(msg).to.equal("Завдання повинно містити щонайменше 5 символів.");
      });
    });

    cy.get('button[name="add-new-todo"]').contains("Додати").click();
  });

  it('повинно видаляти один TODO при натисканні кнопки "Видалити"', () => {
    cy.get('input[name="input-new-todo"]').type("Тестове завдання");
    cy.get('button[name="add-new-todo"]').click();
    cy.contains("Тестове завдання").should("exist");
    cy.contains("Тестове завдання")
      .parent()
      .find('button[name="dlt-todo"]')
      .click();
      cy.wait(500);
      cy.contains("Тестове завдання").should("not.exist");
  });

  it('повинно видаляти всі TODO при натисканні кнопки "Очистити"', () => {
    cy.get('input[name="input-new-todo"]').type("Тестове завдання 1");
    cy.get('button[name="add-new-todo"]').click();
    cy.get('input[name="input-new-todo"]').type("Тестове завдання 2");
    cy.get('button[name="add-new-todo"]').click();
    cy.contains("Тестове завдання 1").should("exist");
    cy.contains("Тестове завдання 2").should("exist");
    cy.get('button[name="dlt-all-todos"]').click();
    cy.contains("Тестове завдання 1").should("not.exist");
    cy.contains("Тестове завдання 2").should("not.exist");
  });

  it("повинно позначати завдання як виконане при натисканні на чекбокс і скасовувати виконання при повторному натисканні", () => {
    cy.get('input[name="input-new-todo"]').type("Тестове завдання 5");
    cy.get('button[name="add-new-todo"]').click();
    cy.contains("Тестове завдання 5").should("exist");
    cy.contains("Тестове завдання 5")
      .parent()
      .find('input[type="checkbox"]')
      .check();
    cy.contains("Тестове завдання 5").should(
      "have.css",
      "text-decoration",
      "line-through solid rgb(128, 128, 128)"
    );
    cy.contains("Тестове завдання 5")
      .parent()
      .find('input[type="checkbox"]')
      .uncheck();
    cy.contains("Тестове завдання 5").should(
      "have.css",
      "text-decoration",
      "none solid rgb(0, 0, 0)"
    );
  });
});
