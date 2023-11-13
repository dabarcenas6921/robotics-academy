import virtualclass from "../../../public/VirtualClass.png";
import Image from "next/image";

export default function VirtualClassroom() {
  const styledButton = {
    fontSize: "1.5em",
    color: "#0000FF",
    background: "#C8DAE8",
    border: "1px solid #0A015A",
    borderRadius: "31px",
    boxShadow: "0px 3px 6px #00000029",
    padding: "10px 20px",
    cursor: "pointer",
    height: "69.1px",
    width: "316.32px",
    fontFamily: "'Dosis', sans-serif",
    fontWeight: 600,
  };
  const styledButton2 = {
    fontSize: "1.5em",
    color: "#0000FF",
    background: "#CAE7C4",
    border: "1px solid #0A015A",
    borderRadius: "31px",
    boxShadow: "0px 3px 6px #00000029",
    padding: "10px 20px",
    cursor: "pointer",
    height: "69.1px",
    width: "316.32px",
    fontFamily: "'Dosis', sans-serif",
    fontWeight: 600,
  };
  return (
    <div>
      <h1 style={{ fontSize: "3.3em", color: "#0000FF" }}>Virtual Classroom</h1>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: "1.2em",
              color: "#0000FF",
              marginBottom: "10px",
            }}
          >
            This feature provides customized content
            <br />
            from lectures, online courses, workshops,
            <br />
            video clips, descriptive animations,
            <br />
            and simulations.
            <br />
            Combine Lessons for a Comprehensive
            <br /> Course or Take Single Lessons to build your
            <br />
            skills.
          </p>
        </div>
        <div style={{ flex: 1.5 }}>
          <Image
            src={virtualclass}
            width={800}
            height={undefined}
            alt="Virtual Classroom"
            style={{
              width: "100%",
              marginTop: "20px",
              alignSelf: "flex-end",
              maxWidth: "1000px",
              height: "auto",
            }}
          />
          <h1
            className="title text-right"
            style={{ fontSize: "3.3em", color: "#0000FF" }}
          >
            Practice your skills and expand your knowledge
          </h1>
        </div>
      </div>
      <div>
        <a href="/badge">
          <button style={{ ...styledButton, marginTop: "10px" }}>
            Earn a Badge!
          </button>
        </a>
      </div>
      <br />
      <div>
        <a href="/vrlesson">
          <button style={{ ...styledButton2, marginTop: "10px" }}>
            Preview Lesson in VR!
          </button>
        </a>
      </div>
    </div>
  );
}
