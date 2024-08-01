import { useState } from "react";
import Login from "./login";
import Code from "./Code";

export default function Onbording() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1);
  };
  return (
    <div>
      {currentScreen === 0 && <Login next={handleNext} />}
      {currentScreen === 1 && <Code next={handleNext} />}
    </div>
  );
}
