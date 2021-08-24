import Button from '../Button/Button';
import './Hero.css';

const Hero = () => {
    return(
        <div className="hero-container">
           <video src="./video-2.mp4" autoPlay loop muted></video>
           <div className="center">
               <div className="desc">
                <h1 className="me">Me</h1>
                    <h1 className="you">You</h1>
                    <p className="and">And</p>
                    <h1 className="we">We</h1>
               </div>
               <div className="quote">
                    <h2>Where ideas come together</h2>
               </div>
                
           </div>
           
           <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--lg">Discover myBaseCamp-2</Button>
           </div>
          
        </div>
    )
}

export default Hero;