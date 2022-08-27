import s from './Days.module.scss';

export const Tabs = () => {
    const tabs=[
        {
            value:"На неделю"
        },
        {
            value:"На месяц"
        },
        {
            value:"На 10 дней"
        }
    ]
  return (
    <div className={s.tabs}>
        <div className={s.tabs_wrapper}>
            {tabs.map((tab)=>(
                <button className={s.tab} key={tab.value}>{tab.value}</button>
            ))}
        </div>
        <button className={s.cancel}>Отменить</button>
    </div>
  )
}
