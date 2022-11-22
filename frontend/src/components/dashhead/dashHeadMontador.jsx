import "./dashHeadMontador.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import head from '../../images/Frame-124.png'
import circle from '../../images/green-circle.png'

const DashHeadMontador = () => {
    return (
        <div className="featured">
            <div className="bottom">
                <div className="summary">
                    <div className="item">
                        <img className="image" src={head} />
                    </div>
                    <div className="item">
                        <h2>Este é o dashboard</h2>
                        <h2 className="green">Montador</h2>
                    </div>
                    <div className="item">
                        <img className="image" src={circle} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashHeadMontador;
