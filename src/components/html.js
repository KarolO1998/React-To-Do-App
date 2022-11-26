import React from "react";

function html() {
  return (
    <>
      <div id="container">
        <h1>
         Nucamp To-Do List <i class="fa fa-plus"></i>
        </h1>
        <input type="text" placeholder="Add New Todo" />

        <ul>
          <li>
            <span>
              <i class="fa fa-trash"></i>
            </span>{" "}
            Task 1
          </li>
          <li>
            <span>
              <i class="fa fa-trash"></i>
            </span>{" "}
            Task 2
          </li>
          <li>
            <span>
              <i class="fa fa-trash"></i>
            </span>{" "}
            Task 3
          </li>
        </ul>
      </div>
    </>
  );
}

export default html;
