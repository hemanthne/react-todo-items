import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <header>
          <h1>To Do List</h1>
          <form className="form-inline">
            <div class="input-group">
              <input
                type="text"
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
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
