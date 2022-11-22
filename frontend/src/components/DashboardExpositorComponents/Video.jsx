import "./navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const DashHeadExpositor = () => {
  return (
    <div className="featured">
      <div className="bottom">
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>

          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>

          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHeadExpositor;
