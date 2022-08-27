import s from './Days.module.scss';
import {GlobalSVGSelector} from '../../../../assets/images/icons/GlobalSVGSelector'

export const Cars = ({ day }) => {
    return (
      <div className={s.cars}>
        <div className={s.day}>{day.day}</div>
        <div className={s.day__info}>{day.day_info}</div>
        <div className={s.img}>
          <GlobalSVGSelector id={day.icon_id} />
        </div>
        <div className={s.temp__day}>{day.temp_day}</div>
        <div className={s.temp__night}>{day.temp_day}</div>
        <div className={s.info}>{day.info}</div>
      </div>
    );
  };
