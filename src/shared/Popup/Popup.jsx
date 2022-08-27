import { GlobalSVGSelector } from '../../assets/images/icons/GlobalSVGSelector';
import { ThisDayItem } from '../../pages/Home/commponents/ThisDay/ThisDayInfo/ThisDayItem';
import s from './Popup.module.scss';

export const Popup = () => {
    const items = [
        {
          icon_id: 'temp',
          name: 'Температура',
          value: '20° - ощущается как 17°',
        },
        {
          icon_id: 'pressure',
          name: 'Давление',
          value: '765 мм ртутного столба - нормальное',
        },
        {
          icon_id: 'precipitation',
          name: 'Осадки',
          value: 'Без осадков',
        },
        {
          icon_id: 'wind',
          name: 'Ветер',
          value: '3 м/с юго-запад - легкий ветер',
        },
      ];
    return (
       <>
       <div className={s.blur}></div>
        <div className={s.popup}>
          <div className={s.day}>
          <div className={s.day_temp}>12°</div>
          <div className={s.day_name}>Среда</div>
          <div className={s.img}>
            <GlobalSVGSelector id='sun'/>
          </div>
          <div className={s.day_time}>Время: <span> 15:40</span></div>
          <div className={s.day_city}>Город: <span> Харьков</span></div>
          </div>
            <div className={s.this_day_info_items}>{
                items.map((item)=>
                    <ThisDayItem key={item.icon_id}item={item}/>
                )
            }
            </div>
            <div className={s.close}>
              <GlobalSVGSelector id='close'/>
            </div>
        </div>
       </>
      )
  
}
