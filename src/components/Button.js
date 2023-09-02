
import classes from './Button.module.css';

const Button=(props)=>{
    return(
            
            <button className={props.isOutline ? classes.outline_btn : classes.primary_btn} onClick={props.onClick} >
               {props.children}
            </button>

    );
};

export default Button;