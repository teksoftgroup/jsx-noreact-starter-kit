import Button from "./Button";

const App = () => (
  <div>
    <Button onClick={() => alert("button 1")}>Click Button 1</Button>
    <Button onClick={() => alert("button 2")}>Click Button 2</Button>
    <Button onClick={() => alert("button 3")}>Click Button 3</Button>
  </div>
);

const rootElement = document.getElementById("root");
rootElement.appendChild(<App />);

export default App;
