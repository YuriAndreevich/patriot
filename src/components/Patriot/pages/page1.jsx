import React from "react";
import fon from "../../../assets/video/mainvideo.mp4";
import ModalComponent from "@/components/ModalComponent/ModalComponent";
import Card from "@/components/Card";

function page1() {
  return (
    <div>
      <div className="relative ">
        <video autoPlay muted loop className="w-screen h-screen object-cover">
          <source src={fon} type="video/mp4" />
        </video>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-black to-0 w-screen h-screen top-3/4">
          <div className=" absolute container p-20 m-auto">
            <p className="font-bold text-2xl mb-2">ПАМЯТЬ</p>
            <p className="">Мы – новое поколение!</p>
            <p className="">Мы никогда не забудем</p>
            <p className="mb-2">ваших отважных лиц!</p>
            <p className="">
              Воспитание уважения к ратному подвигу белорусского народа в годы
              самой страшной войны в истории человечества – Великой
              Отечественной.
            </p>
            <p className="">
              «ПАМЯТЬ» представляет собой блок мероприятий, посвященных Великой
              Победе.
            </p>

            <div className="flex flex-row gap-10">
              <Card text="Видео-посвящение «Прадеды, деды – солдаты Победы»" />
              <Card text="Видео-эстафета «Солдатский подвиг поэтической строкой»" />
              <Card text="Эстафета поколений «Мир в наследство»" />
              {/* <ModalComponent
                name="1. Видео-посвящение «Прадеды, деды – солдаты Победы»"
                href="https://drive.google.com/file/d/1w7ynngNWPR3y4yAg6NmUkbdNoqK_fYff/preview"
              />
            </div>
            <div>
              <ModalComponent
                name="2. Видео-эстафета «Солдатский подвиг поэтической строкой»"
                href="https://drive.google.com/file/d/1n8LrRleB21mfnwumL24VbTos9D_SnfRH/preview"
              />
            </div> */}
              {/* <div> */}
              {/* <ModalComponent
                name="3. Эстафета поколений «Мир в наследство»"
                href={Р3}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page1;
