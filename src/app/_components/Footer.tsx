import React from "react";
import fiucomms from "../../../public/fiucomm.jpg";
import nsflogo from "../../../public/NSF_logo.png";
import compenglogo from "../../../public/FIUcomp.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
          <div>
            <Image
              src={fiucomms}
              width={180}
              height={100}
              alt="Image Description"
            />
            <a></a>
          </div>
          <div className="flex justify-center">
            <Image src={nsflogo} width={180} height={100} alt="" />
            <a></a>
          </div>
          <div className="flex justify-end">
            <Image src={compenglogo} width={180} height={100} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
