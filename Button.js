import style from './Button.module.css';

const Button = () => {
    return (
        <button className={style.glowOnHover} type="button">HOVER ME, THEN CLICK ME!</button>
    )
}
export default Button;