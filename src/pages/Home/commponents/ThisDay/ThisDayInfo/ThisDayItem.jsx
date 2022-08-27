import { GlobalSVGSelector } from '../../../../../assets/images/icons/GlobalSVGSelector';
import { IndicatorSvgSelector } from '../../../../../assets/images/icons/indicators/IndicatorSvgSelector';
import s from './ThisDayInfo.module.scss'

export const ThisDayItem = ({item}) => {
    const {icon_id,name,value}=item;
  return (
    <div className={s.item}>
        <div className={s.indecator}>
            <IndicatorSvgSelector id={icon_id}/>
        </div>
        <div className={s.indecator_name}>{name}</div>
        <div className={s.indecator_value}>{value}</div>
    </div>
  )
}
