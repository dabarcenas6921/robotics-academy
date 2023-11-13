import React, { CSSProperties } from "react";
import Image from "next/image";
import phone from "../../../public/phone.png";
import letter from "../../../public/letter.png";

function ContactPage() {
  return (
    <div style={styles.container}>
      <h1>
        <span
          style={{
            ...styles.underline,
            borderBottom: "3px solid rgb(37, 42, 95)",
          }}
        >
          Contact Us
        </span>
      </h1>
      <p>
        The Robotics Academy Team is interested in helping
        <br />
        with questions or concerns
      </p>
      <div style={styles.imageContainer}>
        <div style={styles.imageWrapper}>
          <Image src={phone} width={96} height={85} alt="Phone Image" />
          <p style={{ ...styles.textUnderImage, ...styles.textCentered }}>
            Call
            <br />
            Toll Free Line
            <br />
            +1-800-RACADEMY
          </p>
        </div>
        <div style={styles.imageWrapper}>
          <Image src={letter} width={96} height={85} alt="Letter Image" />
          <p style={{ ...styles.textUnderImage, ...styles.textCentered }}>
            Email
            <br />
            roboticsacademyfiu@gmail.com
          </p>
        </div>
      </div>
      <p style={{ ...styles.textCentered, ...styles.leaveMessage }}>
        Leave us a message
      </p>
      <input type="text" placeholder="Your Name" style={styles.input} />
      <input type="text" placeholder="Email Address" style={styles.input} />
      <textarea placeholder="Your Message" style={styles.textarea} />
      <button style={styles.submitButton}>Submit</button>
    </div>
  );
}

const styles: {
  container: CSSProperties;
  underline: CSSProperties;
  imageContainer: CSSProperties;
  imageWrapper: CSSProperties;
  textUnderImage: CSSProperties;
  textCentered: CSSProperties;
  leaveMessage: CSSProperties;
  input: CSSProperties;
  textarea: CSSProperties;
  submitButton: CSSProperties;
} = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100vh",
  },
  underline: {
    fontSize: "40px",
    borderBottom: "6px solid rgb(37, 42, 95)",
    display: "inline-block",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "40px 0",
  },
  imageWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 15px",
  },
  textUnderImage: {
    fontSize: "20px",
    textAlign: "center",
  },
  textCentered: {
    textAlign: "center",
  },
  leaveMessage: {
    fontSize: "24px",
    margin: "20px 0",
  },
  input: {
    fontSize: "18px",
    width: "30%",
    height: "30px",
    border: "1px solid black",
    marginTop: "10px",
    padding: "3px 10px",
    borderRadius: "10px",
  },
  textarea: {
    fontSize: "18px",
    width: "30%",
    border: "1px solid black",
    marginTop: "10px",
    padding: "10px",
    borderRadius: "10px",
  },
  submitButton: {
    margin: "auto",
    marginTop: "20px",
    width: "20%",
    border: "1px solid black",
    color: "rgb(37, 42, 95)",
    fontSize: "20px",
    borderRadius: "15px",
    padding: "0px 10px",
  },
};

export default ContactPage;
