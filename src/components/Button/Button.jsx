import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    path
}) => {
    const STYLES = ['btn--primary', 'btn--outline'];
    const SIZES = ['btn--lg','btn--md','btn--sm'];

    const checkedButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <>
            <Link to={path}>
                <button className={`btn ${checkedButtonStyle} ${checkButtonSize}`}
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