import { useState } from "react";
import Image from "next/image";
import "../styles/Description.css";

export default function Description({ destinations }) {
  const [openDestination, setOpenDest] = useState(null);

  const toggleDestination = (dest) => {
    setOpenDest(openDestination === dest ? null : dest);
  };

  return (
    <div className="desc-description">
      {destinations.map((dest, index) => (
        <div className="desc-dest" key={index}>
          <div
            className="desc-header"
            onClick={() => toggleDestination(dest.title)}
          >
            {dest.title}
          </div>

          {openDestination === dest.title && (
            <div className="desc-content">
              {dest.image && (
                <div className="desc-image-container">
                  <Image
                    src={dest.image}
                    alt={`${dest.title} image`}
                    layout="responsive"
                    width={1103}
                    height={300}
                    className="desc-image"
                  />
                </div>
              )}
              {dest.details && (
                <div className="desc-details">
                  {dest.details.map((detail, i) => (
                    <div className="desc-row" key={i}>
                      <span>{detail.label}</span>
                      <div className="desc-progress">
                        <div
                          style={{ width: `${detail.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {dest.content && <p>{dest.content}</p>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
