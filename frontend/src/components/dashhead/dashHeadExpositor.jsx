import "./dashHead.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import head from '../../images/Frame-122.png'
import circle from '../../images/orange-circle.png'

const DashHeadExpositor = () => {
    return (
        <div className="featured">
            <div className="bottom">
                <div className="summary">
                    <div className="item">
                        <img className="image" src={head} />
                    </div>
                    <div className="item">
                        <h2>Este é o dashboard</h2>
                        <h2 className="orange">Expositor</h2>
                    </div>
                    <div className="item">
                        <img className="image" src={circle} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashHeadExpositor;
