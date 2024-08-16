import React, { useEffect, useRef, useState } from "react";
import { Image } from "../../../types";

type ProjectScreenshotProps = {
  img: Image;
};

function ProjectScreenshot({ img }: ProjectScreenshotProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const hideImg = isLoading || error;
  const display = hideImg ? "hidden" : "block";

  useEffect(() => {
    const imgIsLoaded = imgRef && imgRef.current.complete;
    if (!imgIsLoaded) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    setError(false);
  }, [img]);

  function handleLoad() {
    setIsLoading(false);
  }

  function handleError() {
    setError(true);
  }

  return (
    <>
      <img
        ref={imgRef}
        onLoad={handleLoad}
        onError={handleError}
        className={`${display} border border-black aspect-[1345/598]`}
        src={img.src}
        alt={img.alt}
      />
      {hideImg && (
        <div className="flex aspect-[1345/598] w-full items-center justify-center">
          <p>{error ? "Failed to load image." : "Loading image..."}</p>
        </div>
      )}
    </>
  );
}

export default ProjectScreenshot;
