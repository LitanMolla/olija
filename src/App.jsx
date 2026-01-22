import { useState } from "react";
import Welcome from "./components/Welcome";
import LoveMessage from "./components/LoveMessage";
import FinalQuestion from "./components/FinalQuestion";
import FinalPromise from "./components/FinalPromise";
import FloatingHearts from "./components/FloatingHearts";

const App = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-200 text-slate-800 relative overflow-hidden">
      <FloatingHearts />
      {step === 1 && <Welcome onNext={() => setStep(2)} />}
      {step === 2 && <LoveMessage onNext={() => setStep(3)} />}
      {step === 3 && <FinalQuestion onNext={() => setStep(4)} />}
      {step === 4 && <FinalPromise />}
    </div>
  );
};

export default App;
