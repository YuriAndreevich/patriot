import React from "react";
import map from "../../assets/img/map.png";
import Modal from "../MyModal";
import Location from "../../assets/svg/location.svg";

function index() {
  return (
    <div className="container py-20 m-auto">
      <div className="  flex border-2 rounded-2xl  bg-neutral-900">
        <img src={map} alt="Карта Новополоцка" className="rounded-l-2xl" />
        <img src={Location} alt="" className="h-8 w-8 absolute" style={{}} />
        <img src={Location} alt="" className="h-8 w-8 absolute" style={{}} />
        <img src={Location} alt="" className="h-8 w-8 absolute" style={{}} />
        <img src={Location} alt="" className="h-8 w-8 absolute" style={{}} />
        <img src={Location} alt="" className="h-8 w-8 absolute" style={{}} />
        <img src={Location} alt="" className="h-8 w-8 absolute" style={{}} />
        <img src={Location} alt="" className="h-8 w-8 absolute" style={{}} />
        <img src={Location} alt="" className="h-8 w-8 absolute" style={{}} />
        <img src={Location} alt="" className="h-8 w-8 absolute" style={{}} />
        <img src={Location} alt="" className="h-8 w-8 absolute" style={{}} />
        <div className="flex flex-col m-auto gap-10 justify-center">
          <Modal>
            <p>Памятник воинам освободителям </p>
          </Modal>
          <Modal>
            <p>Мемориальная доска в память Героя СоветскогоСоюза В.ИЕронько</p>
          </Modal>
          <Modal>
            <p>Памятник Лилии Костецкой</p>
          </Modal>
          <Modal>
            <p>Мемориальный знак на месте гибели советского самолета</p>
          </Modal>
          <Modal>
            <p>Братская могила воинов-освободителей 219 гвардейского полка</p>
          </Modal>
          <Modal>
            <p>Мемориал жертвам фашизма</p>
          </Modal>
          <Modal>
            <p>Могила пионера Димы Потапенко</p>
          </Modal>
          <Modal>
            <p>Могила жертвам войны</p>
          </Modal>
          <Modal>
            <p>Мемориальный знак партизанскому отряду «Смерть фашизму!»</p>
          </Modal>
          <Modal>
            <p>Мемориальная плита «От славы боевой - к славе трудовой!»</p>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default index;
