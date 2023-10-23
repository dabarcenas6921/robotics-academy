import React from "react";

interface ForumPostProps {
  name: string;
}

export default function ForumPost({ name }: ForumPostProps) {
  const getInitials = (name: string) => {
    const names = name.split(" ");
    return names.length > 1
      ? names[0][0].toUpperCase() + names[1][0].toUpperCase()
      : names[0][0].toUpperCase();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex items-center">
          <button className="bg-gold text-white px-3 py-1 rounded">Back</button>
          <h1 className="font-bold text-2xl ml-4">Forum Post Title</h1>
        </div>
        <h2>Posted in Category: Category</h2>
      </div>
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-600">
            <span className="text-xs font-medium text-white leading-none">
              {getInitials(name)}
            </span>
          </span>
          <div className="ml-3">
            <h3 className="font-semibold text-gray-800">{name}</h3>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="16"
            width="16"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 98.192 98.192"
            className="mr-2"
          >
            <g>
              <path d="M95.799,87.061c-1.96-1.857-3.291-4.046-3.963-6.514c1.101-2.402,1.658-4.952,1.658-7.593V57.771   c0-6.521-3.432-12.239-8.572-15.493v-9.857c0-14.083-11.457-25.54-25.54-25.54H31.524c-14.083,0-25.539,11.457-25.539,25.54v21.849   c0,3.778,0.819,7.423,2.436,10.846c-0.979,3.837-3.005,7.229-6.028,10.092L0,77.475l3.114,1.076c2.032,0.703,4.191,1.06,6.417,1.06   c3.412,0,6.997-0.823,10.667-2.448c3.505,1.734,7.4,2.646,11.327,2.646h7.265c2.722,6.729,9.297,11.502,16.993,11.502h19.355   c2.727,0,5.432-0.612,7.884-1.777c2.54,1.089,5.025,1.641,7.402,1.641c1.613,0,3.18-0.259,4.654-0.769l3.114-1.077L95.799,87.061z    M21.209,73.179l-0.897-0.49l-0.923,0.44c-4.185,1.996-8.173,2.8-11.817,2.362c2.433-3.004,4.081-6.416,4.913-10.181l0.154-0.698   l-0.323-0.638c-1.546-3.05-2.331-6.314-2.331-9.706V32.421c0-11.877,9.663-21.54,21.539-21.54h27.858   c11.877,0,21.54,9.663,21.54,21.54v21.848c0,11.876-9.663,21.538-21.54,21.538H31.524C27.924,75.806,24.357,74.898,21.209,73.179z    M90.423,87.172c-2.06,0-4.277-0.561-6.592-1.664l-0.923-0.44l-0.897,0.49c-2.098,1.146-4.475,1.751-6.874,1.751H55.782   c-5.433,0-10.159-3.039-12.594-7.502h16.194c14.083,0,25.54-11.456,25.54-25.538V47.29c2.809,2.62,4.572,6.345,4.572,10.48v15.183   c0,2.258-0.523,4.433-1.555,6.466l-0.324,0.638l0.154,0.699c0.516,2.335,1.468,4.481,2.841,6.413   C90.548,87.17,90.486,87.172,90.423,87.172z" />
            </g>
          </svg>
          <div>0</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            version="1.1"
            id="Capa_1"
            width="16"
            height="16"
            viewBox="0 0 442.04 442.04"
            className="ml-4 mr-2"
          >
            <g>
              <g>
                <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203    c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219    c49.708,0,103.205,19.442,154.711,56.219c38.504,27.495,63.265,54.736,64.259,55.881c4.067,4.698,4.067,11.671,0,16.367    c-0.994,1.147-25.756,28.387-64.259,55.882C324.225,321.864,270.727,341.304,221.02,341.304z M221.02,159.812    c-42.209,0-82.76,14.701-119.334,43.187C70.002,225.36,50.563,246.643,50.348,246.897c0.215,0.254,19.654,21.537,51.338,44.897    c36.574,28.487,77.125,43.187,119.334,43.187c42.21,0,82.76-14.701,119.335-43.187c31.683-23.36,51.123-44.644,51.338-44.897    c-0.215-0.254-19.654-21.537-51.338-44.898C303.78,174.513,263.23,159.812,221.02,159.812z" />
              </g>
              <g>
                <path d="M221.02,286.564c-36.095,0-65.436-29.341-65.436-65.436s29.341-65.435,65.436-65.435    c36.095,0,65.435,29.34,65.435,65.435S257.114,286.564,221.02,286.564z M221.02,175.693c-25.079,0-45.435,20.356-45.435,45.435    s20.356,45.435,45.435,45.435c25.08,0,45.435-20.356,45.435-45.435S246.1,175.693,221.02,175.693z" />
              </g>
            </g>
          </svg>
          <div>0</div>
        </div>
      </div>
      <div className="py-4">
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sequi
          doloremque repellat dicta unde, fugit facere libero tempore. Quae
          consectetur nemo temporibus earum iure ad accusamus ipsum excepturi
          magni! Explicabo. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Officia sequi doloremque repellat dicta unde, fugit facere
          libero tempore. Quae consectetur nemo temporibus earum iure ad
          accusamus ipsum excepturi magni! Explicabo. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officia sequi doloremque repellat dicta
          unde, fugit facere libero tempore. Quae consectetur nemo temporibus
          earum iure ad accusamus ipsum excepturi magni! Explicabo.
        </p>
        <p>3/10/23 11:19 AM</p>
      </div>
    </div>
  );
}
