import React from "react";
import Lab from "../../../public/VRAR.png";
import Image from "next/image";

const headerStyle: React.CSSProperties = {
  fontSize: "2.5em",
};

const VrArLab: React.FC = () => {
  return (
    <div className="mx-auto mb-12 mt-10">
      <div style={{ flex: 200, marginLeft: "25px" }}>
        <div className="mx-auto max-w-7x1 px-4 sm:px-10 lg:px-6">
          <div className="vr-ar-container" style={{ textAlign: "right" }}>
            <h1 style={headerStyle}>VR and AR Lab</h1>
            <br />
            <div className="description" style={{ textAlign: "right" }}>
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
              <br />
              <div style={{ textAlign: "left" }}>
                <Image
                  src={Lab}
                  width={500}
                  height={undefined}
                  alt="Virtual Classroom"
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    marginBottom: "10px",
                    maxWidth: "1000px",
                    height: "auto",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/nP4bC0OuR-o?si=_2hdGsvsa0E0DgeC"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 30,
                      width: "100%",
                      height: "100%",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VrArLab;
