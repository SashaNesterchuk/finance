import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: Function) => {
  const ref = useRef<any>();
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return { ref };
};
