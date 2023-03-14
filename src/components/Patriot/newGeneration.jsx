import React from "react";
import fon from "../../assets/video/mainvideo.mp4";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function newGeneration() {
  const mainAnim = {
    hidden: {
      x: -200,
      opacity: 0,
      duration: 10,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 1,
      },
    },
  };
  const { t } = useTranslation();

  return (
    <div className="relative">
      <video autoPlay muted loop className="w-screen h-screen object-cover">
        <source src={fon} type="video/mp4" />
      </video>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-black to-0 w-screen h-screen top-3/4">
        <div className=" py-20 m-auto">
          <div class="text-right m-10">
            <p>«…И уже через мгновение уходящий год –</p>
            <p>Год исторической памяти –</p>
            <p>тоже станет частью прошлого, </p>
            <p> а его события заполнят очередную главу</p>
            <p>летописи жизни белорусского народа….</p>
            <p>Он стал звеном и фундаментом</p>
            <p> для логического продолжения ….</p>
            <p className="font-bold">Мы за мир именно потому, что потеряли</p>
            <p className="font-bold">
              каждого третьего только в последней войне.
            </p>
            <p>А.Г.Лукашенко</p>
          </div>
          <div className="text-2xl p-10">
            <motion.div
              initial="hidden"
              variants={mainAnim}
              whileInView="visible"
            >
              <p>Мы – новое поколение!</p>
              <p>Мы никогда не забудем</p>
              <p>ваших отважных лиц!</p>
            </motion.div>

            <motion.div
              initial="hidden"
              variants={mainAnim}
              whileInView="visible"
            >
              <p>Мы - новое поколение,</p>
              <p>Мы выдвигаем свои решения!</p>
            </motion.div>
            <motion.div
              initial="hidden"
              variants={mainAnim}
              whileInView="visible"
            >
              <p>Мы - новое поколение,</p>
              <p>Мы прорубаем свое течение!</p>
            </motion.div>
            <motion.div
              initial="hidden"
              variants={mainAnim}
              whileInView="visible"
            >
              <p>Мы – новое поколение!</p>
              <p>Мы будущего звено!</p>
            </motion.div>
            <motion.div
              initial="hidden"
              variants={mainAnim}
              whileInView="visible"
            >
              <p>Мы открыватели новых судеб,</p>
              <p>Новых побед и больших границ!</p>
            </motion.div>
            <motion.div
              initial="hidden"
              variants={mainAnim}
              whileInView="visible"
            >
              <p>Мы верны своей отчизне,</p>
              <p>мы-времени новых рук!</p>
            </motion.div>
            <motion.div
              initial="hidden"
              variants={mainAnim}
              whileInView="visible"
            >
              <p>Ведь мы иное поколенье,</p>
              <p>Мы будущего флаг!</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default newGeneration;
