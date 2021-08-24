import { Link } from 'react-router-dom';
import './Button.css';

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
    return(
        <>
            <Link to={path}>
                <button className={`btn ${checkedButtonStyle} ${checkButtonSize} ${checkButtonLength}`}
                        onClick={onClick}
                        type={type}
                >
                    {children}
                </button>

            </Link>
        </>
    )
}

export default Button;