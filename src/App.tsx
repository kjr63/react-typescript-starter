import React from "react";
import HelloWorld from "./components/HelloWorld";
import Hello from "./components/Hello";
import HelloClass from "./components/HelloClass";
import HelloState from "./components/HelloState";

const App: React.FC = () => {
    return (
        <div className="App">
            <HelloWorld />
            <Hello name="Liisa" enthusiasmLevel={3}></Hello>
            <HelloClass name="Liisa" enthusiasmLevel={1}></HelloClass>
            <HelloState name="Elvis" enthusiasmLevel={2}></HelloState>
        </div>
    );
};

/* function App(): React.FC {
    return <HelloWorld />;
} */

export default App;
