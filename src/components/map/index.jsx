import React from "react";
import map from "../../assets/img/map.png";
import Modal from "../MyModal";

function index() {
  return (
    <div className="container py-20 m-auto">
      <div className="  flex border-2 rounded-2xl  bg-neutral-900">
        <img src={map} alt="Карта Новополоцка" className="rounded-l-2xl" />
        <div className="flex flex-col m-auto gap-10 justify-center">
          <Modal>
            <p>Памятник воинам освободителям </p>
          </Modal>
          <p>Мемориальная доска в память Героя СоветскогоСоюза В.И. Еронько</p>
          <p>Памятник Лилии Костецкой</p>
          <p>Мемориальный знак на месте гибели советского самолета</p>
          <p>Братская могила воинов-освободителей 219 гвардейского полка</p>
          <p>Мемориал жертвам фашизма</p>
          <p>Могила пионера Димы Потапенко</p>
          <p>Могила жертвам войны</p>
          <p>Мемориальный знак партизанскому отряду «Смерть фашизму!»</p>
          <p>Мемориальная плита «От славы боевой - к славе трудовой!»</p>
        </div>
      </div>
    </div>
  );
}

export default index;
