import React from "react";
import Image from "next/image";
import green from "../../../public/Open Media.png";
import arm from "../../../public/arm.jpg";

const OnlineCoursePage: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    fontSize: "2.5em",
  };

  const courseDescriptionStyle: React.CSSProperties = {
    paddingLeft: "20px",
    textAlign: "left",
    fontSize: "1.2em",
  };

  const imageContainerStyle: React.CSSProperties = {
    textAlign: "right",
    marginTop: "30px",
    maxWidth: "1000px",
    width: "100%",
    marginLeft: "auto",
    display: "block",
  };
  const blueBoxStyle: React.CSSProperties = {
    backgroundColor: "#002080",
    color: "white",
    padding: "20px 20px 2% 20px",
    marginTop: "10px",
    marginBottom: "20px",
    width: "100%",
    height: "70%",
    borderRadius: "15px",
    fontWeight: 500,
    fontSize: "15px",
    textAlign: "left",
  };
  const emphasizedTextStyle: React.CSSProperties = {
    fontSize: "42px",
  };

  const buttonStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  };
  const imageStyle: React.CSSProperties = {
    width: "225px",
    height: "175px",
    marginRight: "300px",
    marginTop: "0px",
    marginBottom: "0px",
  };
  const revisedContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "100px",
  };

  return (
    <div className="content">
      <h1 style={headerStyle}>Online Courses</h1>
      <br />
      <div style={courseDescriptionStyle}>
        <p>
          This feature provides customized content from lectures, online
          courses,
          <br />
          workshops, video clips, descriptive animations, and simulations. This
          helps
          <br />
          users to pursue the most effective approach for identifying and
          closing their
          <br /> skills gaps. In addition, this delivery interface is designed
          to help trainees
          <br />
          be more comfortable with traditional online learning.
        </p>
      </div>
      <div style={imageContainerStyle}>
        <Image
          src={green}
          width={1000}
          height={undefined}
          alt="Virtual Classroom"
          style={{
            width: "200%",
            marginTop: "20px",
            alignSelf: "flex-end",
            maxWidth: "1300px",
            height: "auto",
          }}
        />
        <br />
      </div>
      <div style={blueBoxStyle}>
        <p>
          <span style={emphasizedTextStyle}>
            <strong>
              Fundamentals of
              <br />
              Industrial Robots | Kuka
            </strong>
            <br />
          </span>
          <br />
          Fundamentals of Industrial Robots | Kuka
          <br />
          In this course, you will learn basic anatomy,
          <br />
          safety, operation, and programming of a KUKA
          <br />
          robotic arm.
        </p>

        <div className="flex justify-center" style={revisedContainerStyle}>
          <a
            href="/resources/Lesson1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              Lesson 1: Robotic Arm
            </p>
            <Image
              src={arm}
              alt="Button Image"
              width={200}
              height={300}
              style={imageStyle}
            />
          </a>
          <a
            href="/resources/Lesson1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={buttonStyle}>Robotic Arm Lesson</button>
          </a>
          <br />
        </div>
        <br />
        <div></div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default OnlineCoursePage;
