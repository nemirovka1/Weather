

export const ChangeCssRouteVariables = (them) => {
    const root=document.querySelector(':root');
  
    const commponents = [
        'components-background',
        'card-background',
        'card-shadow',
        'text-color',
        'body-background'];
  
    commponents.forEach((commponent)=>{
        root.style.setProperty(
        `--${commponent}-default`,
        `var(--${commponent}-${them})`
        )
    })

}
