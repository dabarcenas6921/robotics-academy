import React from "react";
import fiucomms from "../../../public/fiucomm.jpg";
import nsflogo from "../../../public/nsflogo.png";
import compenglogo from "../../../public/FIUcomp.png";
import instagramlogo from "../../../public/instalogo.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex-row space-y-5 md:flex md:items-center gap-5 text-center md:justify-between">
          <a
            className="flex justify-center"
            href="https://carta.fiu.edu/communication/"
          >
            <Image
              src={fiucomms}
              width={96}
              height={85}
              alt="FIU Communication"
            />
          </a>
          <a href="https://nsf.gov">
            <Image
              src={nsflogo}
              width={96}
              height={85}
              alt="NSF Logo"
              style={{ margin: "0 auto" }}
            />
            <div className="flex flex-col items-center">
              <h5 style={{ fontSize: "12px", color: "blue" }}>
                Funded by the National Science Foundation
                <br />
                Convergence Accelerator Grant Program
              </h5>
            </div>
          </a>
          <a className="flex justify-center" href="https://cec.fiu.edu/">
            <Image
              src={compenglogo}
              width={96}
              height={85}
              alt="FIU Comp Eng Logo"
            />
          </a>
          <a
            className="flex justify-center items-center space-x-3 font-semibold"
            href="https://www.instagram.com/theroboticsacademy/"
            target="_blank"
          >
            <Image src={instagramlogo} width={50} height={40} alt="Instagram" />
            <p>@theroboticsacademy</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
