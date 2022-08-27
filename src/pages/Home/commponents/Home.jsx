import { Days } from './Days/Days'
import style from './Home.module.scss'
import { ThisDay } from './ThisDay/ThisDay'
import { ThisDayInfo } from './ThisDay/ThisDayInfo/ThisDayInfo'

export const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
          <ThisDay/>
          <ThisDayInfo/>
      </div>
          <Days/>
    </div>
  )
}
