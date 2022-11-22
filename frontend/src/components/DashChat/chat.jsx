import { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import "../../App.css";
import './Cookie.css'
import './chat.css'


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Chat = () => {

  useEffect(() => {

  }, []);

  // efeito para carregar a página com scroll no alto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // Define state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define function that will open the modal
  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // Define function that will close the modal
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
        <div>
            <div className="chat-popup" id="myForm">
              <form action="" className="form-container">
                <h1>Chat</h1>

                <label><b>Message</b></label>
                <textarea placeholder="Type message.." name="msg" required></textarea>

                {/* <button type="submit" class="btn">Send</button> */}
                <button type="button" className="btn cancel" onClick={() => handleClose()}>Close</button>
              </form>
            </div>
        </div >
    </>
  );
};

export default Chat;
