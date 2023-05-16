import '../App.css';
import error404Img from "../assets/err404.png"

// Function
const NoMatch = () => {
    return (
      <div className="error404Image">
        <img alt="" src={error404Img}/>
      </div>
    );
}

// Exports
export default NoMatch;
