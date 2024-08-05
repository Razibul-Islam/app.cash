/* eslint-disable react/prop-types */
import { useState } from "react";
import OTPInput from "react-otp-input";

export default function CashPin({ next }) {
  const [otp, setOtp] = useState("");
  return (
    <div className="w-screen h-screen flex items-center justify-center md:px-0 px-5">
      <div className="max-w-[450px] w-full h-full bg-white rounded-3xl px-8 py-16 flex flex-col justify-between">
        <div className="w-full h-full flex flex-col items-center">
          <h1 className="text-2xl text-[#333] font-medium px-2 mb-3">
            Welcome Back, Shanta!
          </h1>
          <h1 className="text-2xl text-[#333] font-medium px-2 mb-3">
            Enter your Cash PIN to continue
          </h1>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputType="number"
            containerStyle={"space-x-4"}
            inputStyle={
              "rounded-full bg-slate-600 !w-5 h-5 border-none outline-none text-white"
            }
            shouldAutoFocus={true}
          />
        </div>

        <button
          className="rounded-3xl cursor-pointer flex justify-center items-center px-4 h-12 max-h-12 font-medium text-lg text-white disabled:text-[#80eaa7] bg-[#00d64f] w-full disabled:cursor-not-allowed"
          onClick={next}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
