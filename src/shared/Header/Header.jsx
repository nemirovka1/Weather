import { GlobalSVGSelector } from '../../assets/images/icons/GlobalSVGSelector'
import Select from 'react-select';
import s from'./Header.module.scss';
import { useThem } from '../../hooks/useThem';


export const Header = () => {
  const them =useThem();

    const options = [
        { value: 'city-1', label: 'Kiev' },
        { value: 'city-2', label: 'Vinnytsia' },
        { value: 'city-3', label: 'Kharkiv' },
      ];

    const colorStyles={
        control:(styles)=>({
            ...styles,
            backgroundColor:them==='dark' ? '#4F4F4F':'rgba(71, 147, 255, 0.2)',
            width:'194px',
            height:'37px',
            border:'none',
            borderRadius:'10px',
            zIndex:100,
        }),
        singleValue:(styles)=>({
            ...styles,
            color: them.them ==='dark' ? '#fff' : '#000',
        })
    };

    function changeThem() {
        them.changeThem(them.them==='light'?'dark':'light')
    }
  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}><GlobalSVGSelector id="header-logo"/></div>
            <p className={s.title}>React weather</p>
        </div>
        <div className={s.wrapper}>
            <div 
              className={s.change_them}
              onClick={changeThem}>
                <GlobalSVGSelector id="change-theme"/>
            </div>
            <Select defaultValue={options[0]}
            styles={colorStyles} options={options}/>
        </div>
    </header>
  )
}
