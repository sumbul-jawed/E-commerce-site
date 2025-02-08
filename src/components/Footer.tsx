export default function Footer() {
  return (
    <footer className="bg-gray-100 bg-button flex flex-col justify-center items-center w-full px-4 sm:px-8 md:px-16 lg:px-[100px] py-7 md:py-5">
      <div className="w-full max-w-[1240px] flex flex-col gap-[48px]">
        {/* Footer Content */}
        <div className="w-full flex flex-wrap lg:flex-nowrap justify-between gap-8 lg:gap-[48px]">
          {/* Brand and Address */}
          <div className="flex flex-col gap-[20px] md:gap-[30px] w-full lg:w-[30%] text-center lg:text-left">
            <h2 className="text-[24px] font-bold text-black">Furniro.</h2>
            <div>
              <p className="text-[16px] font-normal text-[#9F9F9F]">
                400 University Drive Suite 200 Coral <br /> Gables, FL 33134 USA.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-[20px] w-full lg:w-[20%]">
            <h2 className="text-[16px] font-medium text-[#9F9F9F]">Links</h2>
            <ul className="text-[16px] font-medium text-black flex flex-col gap-2">
              <li className="mt-3">Home</li>
              <li className="mt-3">Shop</li>
              <li className="mt-3">About</li>
              <li className="mt-3">Contact</li>
            </ul>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-[20px] w-full lg:w-[20%]">
            <h2 className="text-[16px] font-medium text-[#9F9F9F]">Help</h2>
            <ul className="text-[16px] font-medium text-black flex flex-col gap-2">
              <li className="mt-3">Payment Options</li>
              <li className="mt-3">Returns</li>
              <li className="mt-3">Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-[20px] w-full lg:w-[30%]">
            <h2 className="text-[16px] font-medium text-[#9F9F9F]">Newsletter</h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="text-[14px] font-normal text-[#9F9F9F] border-0 border-b py-2 px-3 border-black w-full sm:w-auto"
              />
              <button className="text-[14px] font-medium text-black border-0 border-b border-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-[16px] w-full border-t border-[#D9D9D9] text-center lg:text-left">
          <p className="text-black text-[14px] sm:text-[16px]">
            © 2023 Funiro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
