import './Card.css';


const Card = ({
    BgColor,
    img,
    children,
    title
}) => {

    const BgColors = ['blue', 'white-blue', 'dark-blue'];
    const checkedBgColor = BgColors.includes(BgColor) ? BgColor : BgColors[0];
    
    return(
        <div className={`card-container ${checkedBgColor}`}>
            <div className="img">
                <img src={img} loading="lazy"/>
            </div>
            <div className="title">{title}</div>
            <div className="text">
                {children}
            </div>
        </div>
    )
}

export default Card;