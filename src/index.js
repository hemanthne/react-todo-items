import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello"
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
      message: ""
    };
  }

  addItem(e) {
    e.preventDefault();
    const { todoItems } = this.state;
    const newValue = this.newItem.value;
    const isOnTheList = todoItems.includes(newValue);
    if (isOnTheList) {
      this.setState({
        message: "This item is already on the list."
      });
    } else {
      newValue !== "" &&
        this.setState({
          todoItems: [...this.state.todoItems, newValue],
          message: ""
        });
    }
    this.addForm.reset();
  }

  removeItem(item) {
    const newItems = this.state.todoItems.filter(toDoItem => {
      return toDoItem !== item;
    });
    this.setState({
      todoItems: [...newItems]
    });

    if (newItems.length === 0) {
      this.setState({
        message: "No items on your list, add some."
      });
    }
  }

  render() {
    const { todoItems, message } = this.state;
    return (
      <div>
        <header>
          <h1>To Do List</h1>
          <form
            ref={input => (this.addForm = input)}
            className="form-inline"
            onSubmit={e => {
              this.addItem(e);
            }}
          >
            <div class="input-group">
              <input
                ref={input => (this.newItem = input)}
                type="text"
                id="newItem"
                class="form-control"
                placeholder="Add Item"
                aria-label="Add todoItem"
                aria-describedby="button-add"
              />
              <div class="input-group-append" id="button-add">
                <button class="btn btn-primary" type="submit">
                  Add
                </button>
              </div>
            </div>
          </form>
        </header>

        <div className="content">
          {(message !== "" || todoItems.length === 0) && (
            <p className="message text-danger">{message}</p>
          )}
          {todoItems.length > 0 && (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Items</th>
                </tr>
              </thead>
              <tbody>
                {todoItems.map(item => {
                  return (
                    <tr key={item}>
                      <td>{item}</td>
                      <td className="text-right">
                        <button
                          onClick={e => {
                            this.removeItem(item);
                          }}
                          type="button"
                          className="btn btn-default btn-sm"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
