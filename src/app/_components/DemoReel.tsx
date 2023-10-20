import React from "react";

export default function Page() {
  return (
    <div>
      <div className="ratio ratio-16x9">
        <div className="flex justify-center">
          <iframe
            src="https://www.youtube.com/embed/nP4bC0OuR-o?si=_2hdGsvsa0E0DgeC"
            width={1000}
            height={700}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-center">
          <p>Text underneath the video.</p>
        </div>
      </div>
    </div>
  );
}
