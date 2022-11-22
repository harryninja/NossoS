import "./dashHeadADM.css";
import head from '../../images/Frame-122.png'
import circle from '../../images/meio-circ-cinza.png'

const DashHeadADM = () => {
    return (
        <div className="featured">
            <div className="bottom">
                <div className="summary">
                    <div className="item">
                        <img className="image" src={head} />
                    </div>
                    <div className="item">
                        <h2>Este é o dashboard</h2>
                        <h2 className="purple">Administrador</h2>
                    </div>
                    <div className="item">
                        <img className="image" src={circle} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashHeadADM;
