import React, { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import Modal from "react-modal";

// react-youtube
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    Modal.setAppElement("#root"); // Use the correct ID of your root element
  }, []);

  const handleTrailer = useCallback(async (id) => {
    setVideoId("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const res = await fetch(url, options);
      const data = await res.json();

      if (data.results.length > 0) {
        setVideoId(data.results[0].key); // thường lấy key của phần tử đầu tiên
        setModalIsOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <MovieContext.Provider value={{ handleTrailer }}>
      {/* Vi sao lại ghi 2 dấu ngoặc nhọn {{ handleTrailer }} vì value cần nhận là 1 đối tượng nhưng handleTrailer là 1 hàm. Nếu handleTrailer là 1 object thì chỉ cần {handleTrailer}  */}
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed", // React Modal mặc định sẽ áp dụng position: fixed cho cả overlay và nội dung của modal
            zIndex: "9999",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Example Modal"
      >
        <YouTube videoId={videoId} opts={opts} />
      </Modal>
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MovieContext, MovieProvider };
