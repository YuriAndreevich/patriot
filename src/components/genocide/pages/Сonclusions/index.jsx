import React from 'react'
import './Сonclusions.scss'
import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion";




function Сonclusions() {
    const { t } = useTranslation()
    const mainAnim = {
        hidden: {
            x: -200,
            opacity: 0,
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

    return (
        <div className='conclusions' id='conclusions'>

            <motion.div
                initial="hidden"
                variants={mainAnim}
                whileInView="visible" className='conclusions-content'><h1 id='h1'>{t('Выводы авторов')}</h1>
                <p id='p'>{t('По-разному сложились послевоенные судьбы наших собеседников, но у всех у них есть самое заветное желание: чтобы они были последним поколением, у которого война отняла детство и здоровье. Собирая материал, встречаясь с бывшими малолетними узниками, которые пережили застенки концлагерей, нацистский плен, мы пришли к следующим выводам:')}
                </p>
                <ul>
                    <li id='p'>{t('Не только взрослые, но и дети страдали в годы войны. Выжить им удалось, в основном, благодаря присутствию рядом матерей, которые отдавали детям последние крохи хлеба, всегда готовы были прийти на помощь и закрыть своим телом. Выжили в основном те дети, кто был с родителями.')}
                    </li>
                    <li id='p'>{t('Не обошлось и без помощи добрых людей. Среди немцев были изверги и были те, кто оказывал помощь людям в это тяжелое время. Люди любой национальности делятся на добрых и злых.')}
                    </li>
                    <li id='p'>{t('Немаловажную роль сыграла и доля случайности.')}</li>
                    <li id='p'>{t('Степень влияния трагического детства на дальнейшую судьбу бывших малолетних узников, конечно же, велика, ведь до сих пор эти люди не могут вспоминать тот период своей жизни без слез. У кого – то подорвано здоровье; кто – то не смог реализовать свои планы. Но, тем не менее, их дух не сломлен, в большей степени благодаря их личным качествам. Большинство из них продолжают жить и трудиться на благо общества.')}
                    </li>
                    <li id='p'>{t('К ещё одному печальному выводу мы пришли. В юбилейные годы выходило много монографий по истории Второй мировой и Великой Отечественной войн, особенно в середине 80 – х годов. Писалось, исследовалось и говорилось о битвах, о партизанском движении, движении Сопротивления, помощи тыла фронту и очень мало уделялось внимания тому факту, что сотни тысяч людей были вывезены насильно за пределы СССР и вынужден были жить в рабских условиях.')}</li>
                    <li id='p'>{t('О детях войны стали говорить только в последние десятилетия. Связано это с политикой демократизации общества нашего суверенного государства; с пониманием того, что дети не виноваты в том, что с ними произошло, ведь они являлись только жертвами войны, а не врагами и предателями своей Родины.')}</li>
                    <li id='p'>{t('Получив новые знания о войне через рассказы очевидцев, мы сделали вывод, что любая война несет бедствия и страдания людям, любая война – это страшно, а нацизм ещё страшнее.')}
                    </li>
                    <li id='p'>{t('Человечество должно приложить усилия, чтобы войны не повторились.')}</li>
                </ul>
            </motion.div >
        </div >
    )
}

export default Сonclusions