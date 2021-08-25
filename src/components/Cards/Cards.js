import Card from "../Card/Card";
import './Cards.css';

const Cards = () => {
    return(
        <div className="cards-container">
            <div className="cards">
                <div className="sectionTitle">
                    <h1>Why you should try MyBaseCamp 2</h1>
                </div>
                <div className="cards-cards">
                    <Card img="https://d5k6iufjynyu8.cloudfront.net/uploads/UPCommunication-1456212089-n2.jpg"
                        title="communication"
                    >Successful communication helps us better understand people and situations. It helps us overcome diversities, build trust and respect, and create conditions for sharing creative ideas and solving problems
                    </Card>

                    <Card img="https://www.elevatecorporatetraining.com.au/wp-content/uploads/sites/2/2018/12/247417-rain-wallpaper-hd-1920x1080-for-mobile-optimized.png"
                        title="leadership"
                    >
                        Leadership is a vital management function that helps to direct an organization's resources for improved efficiency and the achievement of goals. Effective leaders provide clarity of purpose, motivate and guide the organization to realize its mission.
                    </Card>
                    <Card img="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Real-estate-agent-time-management.jpg"
                        title="time-management"
                    >
                        Good time management skills increase your productivity and help you get more done. Time management skills help you reduce stress and prioritise your time. Effective time management clarifies your goals and prioritises your most important tasks. As a result, you have more time to achieve bigger and better results.
                    </Card>
                </div>
                
            </div>
           
        </div>
    )
}

export default Cards;