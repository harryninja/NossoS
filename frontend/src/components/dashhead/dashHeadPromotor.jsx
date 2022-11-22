import "./dashHeadPromotor.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import head from '../../images/Frame-123.png'
import circle from '../../images/pink-circle.png'

const DashHeadPromotor = () => {
    return (
        <div className="featured">
            <div className="bottom">
                <div className="summary">
                    <div className="item">
                        <img className="image" src={head} />
                    </div>
                    <div className="item">
                        <h2>Este é o dashboard</h2>
                        <h2 className="red">Promotor</h2>
                    </div>
                    <div className="item">
                        <img className="image" src={circle} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashHeadPromotor;
