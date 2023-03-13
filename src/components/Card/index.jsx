import React from "react";
import "./cars.scss";
function index({ text, src }) {
  return (
    <article class="card card--2 w-64 ">
      <div class="card__info-hover"></div>
      <div class="card__img"></div>
      <a href="#" class="card_link">
        <div class="card__img--hover"></div>
      </a>
      <div class="card__info bg-neutral-900">
        <h3 class="card__title">Discover the sea</h3>
      </div>
    </article>
  );
}

export default index;
