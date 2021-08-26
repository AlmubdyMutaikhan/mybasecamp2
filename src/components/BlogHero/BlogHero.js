import Card from '../Card/Card';
import './BlogHero.css';

const BlogHero = () => {
    return(
        <div className="blog-container">
            <div className="blog-desc">
                <h1>Most popular blogs only there</h1>
            </div>
            <div className="blogs">
                <div className="fresh-blogs">
                    <h1>Freshest blogs</h1>
                </div>
                <div className="other-blogs">
                    <h1>Other blogs</h1>
                </div>
            </div>
           
        </div>
    )
}

export default BlogHero;