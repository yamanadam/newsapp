import React from "react";
import imageNew from "../components/images/images.jpeg";

const CardNew = ({ title, description, url, urlToImage }) => {
  return (
    <div className="card p-1 bg-dark text-light " style={{ width: "18rem" }}>
      <img
        src={urlToImage ? urlToImage : imageNew}
        className="card-img-top"
        style={{ height: "155px" }}
        alt="img"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "For More Click Button."}
        </p>
        <a href={url} className="btn btn-danger  w-100 more-btn ">
          Read More
        </a>
      </div>
    </div>
  );
};

export default CardNew;
