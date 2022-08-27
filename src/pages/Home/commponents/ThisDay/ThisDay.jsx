import { GlobalSVGSelector } from '../../../../assets/images/icons/GlobalSVGSelector'
import s from './ThisDay.module.scss'

export const ThisDay = () => {
  return (
    <div className={s.this_day}>
        <div className={s.top_block}> 
           <div className={s.top_block_wrapper}>
                <div className={s.this_temp}>20°</div>
                <div className={s.this_day_name}>Сегодня</div>
           </div>
           <GlobalSVGSelector id="sun"/>
        </div>
        <div className={s.bottom_block}>
            <div className={s.this_time}>Время: <span>21:54</span></div>
            <div className={s.this_city}>Город: <span>Харьков</span></div>
        </div>
    </div>
  )
}
