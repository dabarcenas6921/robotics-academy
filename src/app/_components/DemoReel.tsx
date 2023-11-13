import React from "react";

export default function Page() {
  return (
    <div>
      <div className="ratio ratio-16x9">
        <div className="flex justify-center">
          <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <iframe
              src="https://www.youtube.com/embed/nP4bC0OuR-o?si=_2hdGsvsa0E0DgeC"
              width={900}
              height={600}
              padding-top="30px"
              title="YouTube video"
              allowFullScreen
              padding-bottom="50px"
            ></iframe>
            <br />
            <div className="text-center">
              <p
                style={{
                  color: "#00008B",
                  fontSize: "24px",
                }}
              >
                Minimum Viable Product
              </p>
              <p
                style={{
                  color: "#00008B",
                  fontSize: "24px",
                }}
              >
                Video Demo-Reel of Robotics Academy Virtual Training Platform
              </p>
              <h2 className="text-2xl font-bold text-black md:text-4xl md:leading-tight"></h2>
            </div>
          </div>
          <div className="text-center"></div>
        </div>
      </div>
    </div>
  );
}
