import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeButton from "./components/ThemeButton";
import Cart from "./components/Cart";

function App() {
  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }
  //actual change in theme

  useEffect(()=> {
    document.querySelector('html').classList.remove("light","dark") //first removing then adding
    document.querySelector('html').classList.add(themeMode)
  },[themeMode]) //jab themeMode change hoga tab rerender hoga


  return (
    <ThemeProvider  value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Cart/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
