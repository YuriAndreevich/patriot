import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function index() {
  return (
    <>
      <input type="checkbox" id="active" />
      <label for="active" class="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <div class="rm-wrapper">
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link>Gallery</Link>
          </li>
          <li>
            <Link>Feedback</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default index;
