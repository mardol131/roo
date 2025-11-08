import { useEffect } from "react";

export function useClickOutside<T extends HTMLElement>(
  mainRef: React.RefObject<T | null>,
  onClickOutside: () => void,
  secondaryRef?: React.RefObject<T | null>
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;

      const outsideMain = !mainRef.current || !mainRef.current.contains(target);

      const outsideSecondary =
        !secondaryRef?.current || !secondaryRef.current.contains(target);

      if (
        (outsideMain && outsideSecondary) ||
        (secondaryRef === undefined && outsideMain)
      ) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mainRef, onClickOutside, secondaryRef]);
}
