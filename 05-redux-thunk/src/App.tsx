import { Provider } from "react-redux";
import {WaiterApp} from "./features/Waiter";
import { store } from "./store";
import React from "react";
import {ThemeProvider} from "./components/ThemeContext";

export function App() {
  return (
    <Provider store={store}>
        <WaiterApp />
    </Provider>
  );
}
