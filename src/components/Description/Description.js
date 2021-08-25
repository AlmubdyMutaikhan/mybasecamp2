import './Description.css';


const DescriptionSection = () => {
    return(
        <div id="discover" className="description-container">
            <div className="description">
                <div className="description-whatitis">
                    <h1 className="">What is MyBaseCamp 2</h1>
                </div>
                
                <div className="description-details">
                    <div className="glass">
                        <p className="details">
                            <span style={{fontSize : '25px', fontWeight:'bold'}}>MyBaseCamp 2</span> is a platform for leaders, people who want to improve himself, where everyone has the opportunity to learn and feel like a volunteer.
                            Our goal is to help young people understand their individuality and discover their inner potential.
                            Our platform provides all the tools, information materials and support needed to build super stars. 
                        </p>
                    </div>

                    <div className="image">
                        <p className="image-text">Your journey starts from there</p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}


export default DescriptionSection;