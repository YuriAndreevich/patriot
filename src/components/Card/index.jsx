import React from "react";
import "./cars.scss";
import img from "../../assets/games/1.png";
function index({ text, src }) {
  const mystyle = {
    backgroundImage: url(
      "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    ),
  };

  return (
    <article class="Ccard Ccard--2 w-64 mystyle ">
      <div class="Ccard__info-hover"></div>
      <div class="Ccard__img"></div>
      <a href="#" class="Ccard_link">
        <div class="Ccard__img--hover"></div>
      </a>
      <div class="Ccard__info bg-neutral-900">
        <h3 class="Ccard__title">{text}</h3>
      </div>
    </article>
  );
}

export default index;
// .Ccard--2 .Ccard__img, .Ccard--2 .Ccard__img--hover
