export default function Credit({ next }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center md:px-0 px-5">
      <div className="max-w-[450px] flex flex-col justify-between w-full h-full bg-white rounded-3xl px-8 py-16">
        <div>
          <h1 className="text-2xl text-[#333] font-medium px-2 mb-3">
            Enter the Cash Card Number
          </h1>
          <input
            type="number"
            id="code"
            placeholder="Debit Card Number"
            className="focus:border-[#00d64b] mb-2 focus:outline-none focus:bg-white min-h-16 px-4 rounded-2xl border-2 border-solid border-[#f4f4f4] bg-[#f4f4f4] w-full text-[#333] text-lg"
          />
          <p className="text-xs text-[#333]">Secured with 256-bit encryption</p>
        </div>

        <button
          disabled
          className="rounded-3xl cursor-pointer flex justify-center items-center px-4 h-12 max-h-12 font-medium text-lg text-white disabled:text-[#80eaa7] bg-[#00d64f] w-full disabled:cursor-not-allowed"
          onClick={next}
        >
          Verify Card
        </button>
      </div>
    </div>
  );
}
