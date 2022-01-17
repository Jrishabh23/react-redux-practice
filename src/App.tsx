import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}

export default App;
