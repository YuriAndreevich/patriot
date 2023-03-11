import React from "react";
import data from "./data";
import SwiperZoom from "../SwiperZoom";
import lenta from "../../assets/img/PhotoMuseum/lenta.png";

function index() {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${lenta})` }}
    >
      <div className="container py-20 m-auto ">
        <h1 className="text-center font-bold mb-3">
          МУЗЕЙ - «Беларуская хатка»
        </h1>
        <p className="indent-2.5 mb-3">
          Первое помещение напоминает обычный деревенский дом. Тут – русская
          печь, большой деревянный стол, несколько скамеек. Под потолком
          расположена колыбель, для новорожденного ребенка. Как в каждом доме
          конца XIX начало XX века, можно увидеть необходимые приспособления для
          работы. Это прялка – приспособление для изготовления нитей из пряжи.
          Возле печи деревянная лопата для хлеба. Тут же несколько старинных
          чугунных утюгов, которые нагревались при помощи угля. Есть здесь и
          деревянная маслобойка, при помощи которой из сливок делали масло. Есть
          в музее приспособление под названием деревянная качалка. Такими были
          первые утюги без подогрева. Сейчас в каждой квартире есть шкафы, а
          раньше в домах эту функцию выполняли сундуки. Есть такой и в нашем
          музее.
        </p>
        <p className="indent-2.5 mb-3">
          Отдельной экспозицией представлена вышивка, которую в первую очередь
          представляет мужской костюм, сюда входят: рубашка, штаны, пояс, жилет.
          На одежде вышитые узоры в основном красного цвета, который издавна
          использовали как оберег. Рядом с мужским костюмом – женская рубашка.
          Также собраны работы по вышивке учащихся колледжа, и их семей на
          протяжении нескольких лет.На картинах в основном изображены цветы и
          птицы. Раньше в каждом доме, кто мог себе это позволить, собирали
          фотографии. Сейчас мы размещаем фотографии в разные рамки. А раньше
          была большая рамка и много снимков. Такие рамки есть и в нашем музее.
        </p>
        <p className="indent-2.5 mb-3">
          В музее есть различные экспозиции. Это «Ткачество», «Резьба по
          дереву», «Соломенное чудо», «Гончарство», «Гравюры по металлу». В
          разделе «Ткачество» представлены части ткаческого стана, которые
          называются: калёсцы, берда, чаўнок, юрок, ніты – по белорусски. Есть
          образцы пряжи. Это лён и хлопок, а также образцы тканей (ткань льняная
          неотбеленная, льнаная скатерть и кружева). В разделе “ Резьба по
          дереву” представлены различные виды резьбы: контурная резьба,
          выемчатая резьба, рельефная резьба, сквозная резьба, объёмная резьба.
          Есть различные фигурки и предметы быта (ложки, досточки, вазочки и
          т.д.). В разделе “Соломенное чудо” представлены работы учащихся
          различных годов. Это разнообразные картины, панно и предметы быта.
          Разделы “Гончарство” и “Гравюры по металлу” небольшие. Есть несколко
          кувшинов и украшений из глины, а также картины по металлу.
        </p>
        <p className="indent-2.5 mb-3">
          Учащиеся в свободное время могут получить сведения о культуре нашего
          народа. Изучить быт и работу мастеров периода XIX – XX веков, на
          примере нашей «Беларускaй хаткi».
        </p>
        <SwiperZoom data={data} />
      </div>
    </div>
  );
}

export default index;
