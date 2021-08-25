import './Button.css';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonLength,
    path
}) => {
    const STYLES = ['btn--primary', 'btn--outline', 'btn--outline-nb'];
    const SIZES = ['btn--lg','btn--md','btn--sm'];
    const LENGTHS = ['', 'full', 'half'];

    const checkedButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonLength = LENGTHS.includes(buttonLength) ? buttonLength : LENGTHS[0];
    console.log(checkedButtonStyle);
    const buttonSrc = (<button className={`btn ${checkedButtonStyle} ${checkButtonSize} ${checkButtonLength}`}
                            onClick={onClick}
                            type={type}
                        >
                            {children}
                        </button>)

    const componentButton = (<Link to={path}>
                                {buttonSrc}
                            </Link>)

    const scrollButton = (
        <ScrollLink to={path}
                    smooth={true}
                    duration={500}
        >
            {buttonSrc}
        </ScrollLink>
    )

    let resButton = null;
    if(type === 'scroll') {
        resButton = scrollButton;
    } else if(type === 'component') {
        resButton = componentButton;
    } else {
        resButton = componentButton;
    }

    return(
        <>
          {resButton}
        </>
    )
}

export default Button;