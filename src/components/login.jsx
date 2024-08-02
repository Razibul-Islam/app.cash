/* eslint-disable react/prop-types */
import { useState } from "react";
import flag from "../../public/assets/flag1.webp";

export default function Login({ next, setPhoneMail }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [toggleInput, setToggleInput] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setPhoneMail(e.target.value);
  };

  const validateGmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPhoneMail(value);
    setIsValid(validateGmail(value));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center md:px-0 px-5">
      <div className="max-w-[450px] w-full h-full max-h-[450px] bg-white rounded-3xl px-8 py-16">
        <h1 className="text-2xl text-[#333] font-medium px-2 mb-3">Log In</h1>
        <p className="text-[#666666] text-base font-normal px-2">
          Enter your phone number or email. New to Cash App?{" "}
          <a href="#" className="text-[#00d64f] font-medium">
            Create account
          </a>
        </p>
        {!toggleInput ? (
          <label htmlFor="number" className="px-2">
            <h5 className="mt-12 text-[#666666] font-medium">Mobile number</h5>
            <div className="flex items-center rounded-2xl border-2 border-solid  focus:bg-white border-[#f4f4f4] bg-[#f4f4f4] w-full text-[#333] text-lg focus:border-[#00d64b]">
              <div className="flex items-center w-28 cursor-pointer">
                <img src={flag} className="w-8 h-6 mr-2" />
                <span>+1</span>
              </div>
              <input
                type="number"
                onChange={handlePhoneNumberChange}
                className=" focus:outline-none bg-transparent min-h-16 w-full"
                placeholder="(123) 456 7890"
                accept="^\+?[1-9]\d{1,14}$"
              />
            </div>
          </label>
        ) : (
          <label htmlFor="email" className="px-2">
            <h5 className="mt-12 text-[#666666] font-medium">Email</h5>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="focus:border-[#00d64b] mb-[27px] focus:outline-none focus:bg-white min-h-16 px-4 rounded-2xl border-2 border-solid border-[#f4f4f4] bg-[#f4f4f4] w-full text-[#333] text-lg"
            />
          </label>
        )}
        <div className="flex px-4 items-center justify-between gap-5">
          <button
            onClick={() => setToggleInput(!toggleInput)}
            className="rounded-3xl cursor-pointer flex justify-center items-center px-2 h-12 max-h-12 font-medium text-lg text-[#333333] bg-[#e8e8e8] w-full"
          >
            {!toggleInput ? "Use Email" : "Use Phone"}
          </button>
          <button
            disabled={
              phoneNumber.length === 10 || phoneNumber.length === 11 || isValid
                ? false
                : true
            }
            className="rounded-3xl cursor-pointer flex justify-center items-center px-2 h-12 max-h-12 font-medium text-lg text-white disabled:text-[#80eaa7] bg-[#00d64f] w-full disabled:cursor-not-allowed"
            onClick={next}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
