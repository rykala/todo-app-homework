import { useContext } from "react";
import { RouterContext } from "../context/RouterContext";

export const useRouter = (): {
  location: Location;
  navigateTo: (url: string) => void;
} => {
  const { location, navigateTo } = useContext(RouterContext);
  return { location, navigateTo };
};
