import { MdErrorOutline } from "react-icons/md";

export default function Code({ next }) {
  return (
    <div className="w-screen h-screen bg-green-500 flex items-center justify-center md:px-0 px-5">
      <div className="max-w-[450px] w-full h-full max-h-[450px] bg-white rounded-3xl px-8 py-16">
        <h1 className="text-2xl text-[#333] font-medium px-2 mb-3">
          Enter the code sent to your email
        </h1>
        <p className="text-[#666666] text-base font-normal px-2">
          We sent the code to your mail.
        </p>
        <p className="flex items-center text-[#00d64f] font-medium gap-2 mt-5">
          <MdErrorOutline />
          Get help
        </p>
        <label htmlFor="code" className="px-2">
          <h5 className="mt-12 text-[#666666] font-medium">
            Confirmation code
          </h5>
          <input
            type="number"
            id="code"
            placeholder="Code"
            className="focus:border-[#00d64b] mb-[27px] focus:outline-none focus:bg-white min-h-16 px-4 rounded-2xl border-2 border-solid border-[#f4f4f4] bg-[#f4f4f4] w-full text-[#333] text-lg"
          />
        </label>
        <button
          disabled
          className="rounded-3xl cursor-pointer flex justify-center items-center px-4 h-12 max-h-12 font-medium text-lg text-white disabled:text-[#80eaa7] bg-[#00d64f] w-full disabled:cursor-not-allowed"
          //   onClick={next}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
