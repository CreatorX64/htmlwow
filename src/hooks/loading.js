import { useState, useEffect } from "react";
import { useAppContext } from "@/context/app";

export const useLoading = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const { isFirstLoad, setIsFirstLoad } = useAppContext();

  useEffect(() => {
    const tid = setTimeout(() => {
      setIsPageLoaded(true);
      setIsFirstLoad(false);
    }, 1000);

    return () => clearTimeout(tid);
  }, [setIsFirstLoad]);

  return { isPageLoaded, isFirstLoad };
};
