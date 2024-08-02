import { useState } from "react";
import Login from "./login";
import Code from "./Code";
import CashPin from "./CashPin";
import Credit from "./Credit";

export default function Onbording() {
  const [phoneMail, setPhoneMail] = useState(null);
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1);
  };

  return (
    <div>
      {currentScreen === 0 && (
        <Login next={handleNext} setPhoneMail={setPhoneMail} />
      )}
      {currentScreen === 1 && <Code next={handleNext} phoneMail={phoneMail} />}
      {currentScreen === 2 && <CashPin next={handleNext} />}
      {currentScreen === 3 && <Credit next={handleNext} />}
    </div>
  );
}
