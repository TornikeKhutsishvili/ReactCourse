import { useEffect, useState } from "react";

const brakpoints = {
  mobile: 420,
};

const detectDevice = () => {
  return window.innerWidth <= brakpoints.mobile ? "MOBILE" : "DESKTOP";
};

function useDetectDevice() {
  const [device, setDevice] = useState(() => detectDevice());

  useEffect(() => {
    const handleResize = () => {
      setDevice(detectDevice());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return device;
}

export default useDetectDevice;
