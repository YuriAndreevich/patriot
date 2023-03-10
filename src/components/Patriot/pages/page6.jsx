import React from "react";

function page1() {
  return (
    <div className="container py-20 m-auto">
      <p
        style={{
          color: "#782304",
          textAlign: "center",
          fontSize: "6rem",
          padding: "30px",
        }}
      >
        ОТЕЧЕСТВО КАК ЦЕННОСТЬ
      </p>
      <p className="p-content-stix">Мы верны своей отчизне,</p>
      <p className="p-content-stix"> мы-времени новых рук!</p>
      <p className="p-content-italic">
        Повышение интереса к созидательному труду, сохранению мира, преумножению
        богатства Беларуси; повышение культуры этнических отношений.
      </p>
      <p className="p-content-meop">
        «ОТЕЧЕСТВО КАК ЦЕННОСТЬ» - блок, который помогает выстроить работу по
        знакомству с государственными ориентирами, идеалами Республики Беларусь
        и по их приятию; по знакомству с народами, населяющими нашу страну, их
        обычаями и традициями.
      </p>
      {/* <div><ModalComponent name='1. Актуальная папка для правового ликбеза «Сила закона»' href={o1} /></div> */}
      {/* <div> <ModalComponent name='2. Встреча-диалог культур «Нас познакомил Новополоцк»' href={o2} /></div> */}
    </div>
  );
}

export default page1;
