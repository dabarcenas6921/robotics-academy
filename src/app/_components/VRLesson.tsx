import React from "react";
import Lab from "../../../public/VRAR.png";
import Image from "next/image";

const headerStyle: React.CSSProperties = {
  fontSize: "2.5em",
};

const VrArLab: React.FC = () => {
  return (
    <div
      className="vr-ar-container"
      style={{ display: "flex", justifyContent: "flex-end" }} // Updated styles for flex alignment
    >
      <div style={{ flex: 1, marginLeft: "150px" }}></div>{" "}
      {/* Adjusted margin to the left */}
      <div className="vr-ar-container" style={{ textAlign: "right" }}>
        {" "}
        {/* Aligned text to the right */}
        <h1 style={headerStyle}>VR and AR Lab</h1>
        <br />
        <div className="description" style={{ textAlign: "right" }}>
          {" "}
          {/* Aligned text to the right */}
          <p>
            The Virtual Reality (VR) and Augmented Reality (AR)
            <br />
            lab provides training modules in two simulation
            <br /> formats: A virtual reality training environment, where
            <br /> users learn about robotic arm simulations and end-
            <br />
            effectors integration in a simulated virtual space, and an
            <br />
            Augmented Reality training environment, where
            <br />
            infographics, tutorials, and real-time data is virtually
            <br />
            overlaid in-situ, on top of physical robots and
            <br />
            machinery in an active lab setting.
          </p>
        </div>
        <br />
        <div style={{ textAlign: "left" }}>
          {" "}
          <Image
            src={Lab}
            width={1000}
            height={undefined}
            alt="Virtual Classroom"
            style={{
              width: "100%",
              marginTop: "5px",
              maxWidth: "1000px",
              height: "auto",
            }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <iframe
            src="https://www.youtube.com/embed/nP4bC0OuR-o?si=_2hdGsvsa0E0DgeC"
            width={900}
            height={500}
            style={{ paddingTop: "40px", paddingLeft: "100px" }} // Changed padding-top to style attribute
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VrArLab;
