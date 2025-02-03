import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <Formik
        initialValues={{ task: '' }}
        validate={values => {
          const errors = {};
          if (!values.task) {
            errors.task = 'Required';
          } else if (values.task.length < 5) {
            errors.task = 'Task must be at least 5 characters';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addTodo(values.task);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="task"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.task}
              placeholder="Enter your task"
            />
            {errors.task && touched.task && <div>{errors.task}</div>}
            <button type="submit" disabled={isSubmitting}>Add Task</button>
            
          </form>
        )}
      </Formik>

      <ul>
        {todos.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
