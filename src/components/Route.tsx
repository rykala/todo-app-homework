import React from "react";
import { useRouter } from "../hooks/useRouter";

type RouteProps = {
  path: string;
  component: React.FC;
};

const Route: React.FC<RouteProps> = ({ path, component }) => {
  const { location } = useRouter();

  const render = new RegExp(`^${path}$`).test(location.pathname);

  return render ? React.createElement(component) : null;
};

export default Route;
