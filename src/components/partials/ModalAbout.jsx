import { AiOutlineClose } from "react-icons/ai";

function AboutModal({ modalAbout, setModalAbout, person }) {
  return (
    person && (
      <div
        className={` ${modalAbout ? "modal-about" : "modal-about-inactive"} `}
      >
        <div className="about-card">
          <AiOutlineClose
            className="close-btn about-card-btn"
            onClick={() => setModalAbout(false)}
          />
          <img src={person.image} alt="" className="about-card-img" />
          <div className="about-card-details">
            <h3 className="mb-3 about-card-title">{person.name}</h3>
            <p>{person.resume}</p>
          </div>
        </div>
      </div>
    )
  );
}

export default AboutModal;
