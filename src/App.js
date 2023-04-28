import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1a0832";
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled", "success");
    }
    console.log("Darkmode-Clicked");
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TechyTexts"
          about="About Us"
          mode={mode} 
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/About" element={<About mode={mode} />}></Route>




          <Route
            exact
            path="/"
            element={ 
              <TextForm
                heading="Panun text trayew yetin IFYAMI "
                mode={mode}
                showAlert={showAlert}/>}></Route>



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
