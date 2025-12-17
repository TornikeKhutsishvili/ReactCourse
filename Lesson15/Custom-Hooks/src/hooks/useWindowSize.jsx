import { useEffect } from "react";
import useDetectDevice from "./useDetectDevice";

const useWindowSize = () => {
  const device = useDetectDevice();
  useEffect(() => {
    console.log(device);
  }, [device]);

  return device;
};

export default useWindowSize;
