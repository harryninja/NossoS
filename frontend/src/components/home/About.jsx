import { Link } from "react-router-dom";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 main1-text">
            <div className="about-text main1-about">
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <Link to="/como-funciona">
                <button className="search-btn2">COMO FUNCIONA</button>
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 main1-pic">
          </div>
        </div>
      </div>
    </div>
  );
};
