import './index.css'

const Modal = ({
  clickedImg,
  setClickedImg,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="overlay_modal_causas dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="bigger pic" />
      </div>
    </>
  );
};

export default Modal;
