import { useStore } from "../store";
import { createContext } from "react";
import { getSide } from "../utils";

export const MobxContext = createContext();

const MyApp = (props) => {
  console.log("hello from _app - ", getSide());
  const { Component, pageProps, err } = props;
  const store = useStore(pageProps.initialState);
  return (
      <MobxContext.Provider value={store}>
        <Component {...pageProps} err={err} />
      </MobxContext.Provider>
  );
};

export default MyApp;
