import React from "react";
import fon from "../../../assets/video/mainvideo.mp4";
import ModalComponent from "@/components/ModalComponent";
import Card from "@/components/Card";
import "../shyne.scss";
import T2 from "../../../assets/patriot/T2.pdf";
import T3 from "../../../assets/patriot/T3.pdf";
import img from "../../../assets/cards/1.png";

function page1() {
  return (
    <div>
      <div className="relative ">
        <video autoPlay muted loop className="w-screen h-screen object-cover">
          <source src={fon} type="video/mp4" />
        </video>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-black to-0 w-screen h-screen top-3/4">
          <div className=" absolute container sm:p-20  p-10 m-auto ">
            <p className="font-bold text-6xl sm:text-9xl mb-2 shyne">
              ТВОРЧЕСТВО
            </p>
            <p className="text-2xl">Мы - новое поколение,</p>
            <p className="text-2xl mb-2">Мы прорубаем свое течение!</p>
            <p className="mb-2 text-xl">
              Развитие творческого потенциала учащихся, конкурсная деятельность.
            </p>
            <p className="mb-10 text-xl">
              «ТВОРЧЕСТВО» - мероприятия блока дают возможность проявить
              творческие задатки всех участников мобиля в различных видах
              деятельности, но посвященных гражданско-патриотическому
              направлению.
            </p>

            <div className="flex flex-row gap-10 ">
              <ModalComponent
                name="Видео-признание «Мелодия отчего дома»"
                href="https://drive.google.com/file/d/1eaX1bVekAEeXmZN7DtXJXNL89iIvaIbF/preview"
              >
                <Card src={img} text="Видео-признание «Мелодия отчего дома»" />
              </ModalComponent>
              <ModalComponent name=" Перформанс «Ожившие статуи»" href={T2}>
                <Card src={img} text="Перформанс «Ожившие статуи»" />
              </ModalComponent>
              <ModalComponent name="КВН «Друзья, прекрасен наш союз»" href={T3}>
                <Card
                  src={img}
                  text="КВН «Друзья, прекрасен наш союз»                     "
                />
              </ModalComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page1;
