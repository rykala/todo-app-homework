import React, { createContext, useCallback, useState } from "react";

const RouterContext = createContext<{
  location: Location;
  navigateTo: (url: string) => void;
}>({
  location: window.location,
  navigateTo: () => {}
});

const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [location, setLocation] = useState<Location>(window.location);

  const navigateTo = useCallback((url: string) => {
    window.history.pushState({}, "Todo app", url);
    setLocation({ ...window.location });
  }, []);

  return (
    <RouterContext.Provider value={{ location, navigateTo }}>
      {children}
    </RouterContext.Provider>
  );
};

export { RouterContext, RouterProvider };
