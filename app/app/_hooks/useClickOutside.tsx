import { useEffect } from "react";

export function useClickOutside<T extends HTMLElement>(
  mainRef: React.RefObject<T | null>,
  onClickOutside: () => void,
  secondaryRef?: React.RefObject<T | null>
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;

      const clickedOutsideMain =
        mainRef.current && !mainRef.current.contains(target);
      const clickedOutsideSecondary =
        secondaryRef?.current && !secondaryRef.current.contains(target);

      // Zavři jen, když je klik mimo oba elementy
      if (clickedOutsideMain && clickedOutsideSecondary) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mainRef, onClickOutside, secondaryRef]);
}
