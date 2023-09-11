import "./App.css";
import Footer from "./Components/Footer/Footer";
import QrGenerator from "./Components/QrGenerator/QrGenerator";

function App() {
  return (
    <div className="app">
      <QrGenerator />
      <Footer />
    </div>
  );
}

export default App;
