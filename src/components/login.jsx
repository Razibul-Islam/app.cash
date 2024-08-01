/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Login({ next }) {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [toggleInput, setToggleInput] = useState(false);
  const dropdownRef = useRef(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countries = response.data.map((country) => ({
          code: `${country.idd.root}${
            country.idd.suffixes ? country.idd.suffixes[0] : ""
          }`,
          flag: country.flags.png,
          name: country.name.common,
        }));
        setCountryCodes(countries);
        setSelectedCountry(countries[0]);
        setPhoneNumber(countries[0].code);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setPhoneNumber(country.code);
    setDropdownOpen(false);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const validatePhoneNumber = (number) => {
    const regex = /^\+?[1-9]\d{1,14}$/;
    const isValidLength = number.length >= 10 && number.length === 11;
    setIsValid(regex.test(number) && isValidLength);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const validateGmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateGmail(value));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="w-screen h-screen bg-green-500 flex items-center justify-center md:px-0 px-5">
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
            {/* <input
              type="number"
              id="number"
              className="focus:border-[#00d64b] focus:outline-none focus:bg-white min-h-16 px-4 rounded-2xl border-2 border-solid border-[#f4f4f4] bg-[#f4f4f4] w-full text-[#333] text-lg"
              
            /> */}
            <div className="flex items-center rounded-2xl border-2 border-solid  focus:bg-white border-[#f4f4f4] bg-[#f4f4f4] w-full text-[#333] text-lg focus:border-[#00d64b]">
              <div
                className="flex items-center w-28 cursor-pointer"
                onClick={toggleDropdown}
              >
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  className="w-8 h-6 mr-2"
                />
                <span>{selectedCountry.code}</span>
              </div>
              <input
                type="number"
                onChange={handlePhoneNumberChange}
                className=" focus:outline-none bg-transparent min-h-16 w-full"
                placeholder="(123) 456 7890"
                accept="^\+?[1-9]\d{1,14}$"
              />
            </div>

            {dropdownOpen && (
              <ul
                className="absolute z-10 w-[150px] overflow-x-hidden max-h-60 overflow-auto bg-white border mt-1"
                ref={dropdownRef}
              >
                {countryCodes.map((country) => (
                  <li
                    key={country.name}
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleCountryChange(country)}
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-8 h-6 mr-2"
                    />
                    <span>{country.code}</span>
                  </li>
                ))}
              </ul>
            )}
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
        <div className="flex md:flex-nowrap flex-wrap px-4 items-center justify-between gap-5">
          <button
            onClick={() => setToggleInput(!toggleInput)}
            className="rounded-3xl cursor-pointer flex justify-center items-center px-4 h-12 max-h-12 font-medium text-lg text-[#333333] bg-[#e8e8e8] w-full"
          >
            Use Email
          </button>
          <button
            disabled={
              phoneNumber.length === 10 || phoneNumber.length === 11 || isValid
                ? false
                : true
            }
            className="rounded-3xl cursor-pointer flex justify-center items-center px-4 h-12 max-h-12 font-medium text-lg text-white disabled:text-[#80eaa7] bg-[#00d64f] w-full disabled:cursor-not-allowed"
            onClick={next}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
