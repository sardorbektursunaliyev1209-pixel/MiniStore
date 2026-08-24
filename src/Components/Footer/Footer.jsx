import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaDhl, FaInstagram } from "react-icons/fa";
import Logo from "../../../public/Navbar-img/Logo.png";
import { footers, navLinks } from "../../Sevices/navLinks";
function Footer() {
  return (
    <footer className="pt-16 pb-10">
      <div className="Container_1200">
        <div className="flex items-start justify-between gap-10">

          <div className="w-[300px]">
            <img
              src={Logo}
              alt="Logo"
              className="w-[150px] mb-5"
            />

            <p className="text-[14px] leading-6 text-gray-500">
              Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
              Gravida massa volutpat aenean odio erat nullam fringilla.
            </p>

            <div className="flex gap-4 mt-6 text-[18px] text-gray-600">
              <FaInstagram />
              <FaInstagram />
              <FaInstagram />
              <FaInstagram />
            </div>
          </div>

          <ul className="navLinks flex flex-col gap-3">
            <li className="mb-2 text-[15px] font-semibold uppercase tracking-[1px] text-gray-800">
              Quick Links
            </li>

            {navLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  className="text-[14px] text-gray-500"
                >
                  {item.title}
                </li>
              );
            })}
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="mb-2 text-[15px] font-semibold uppercase tracking-[1px] text-gray-800">
              Help & Info
            </li>

            {footers.map((item) => {
              return (
                <li
                  key={item.id}
                  className="text-[14px] text-gray-500"
                >
                  {item.title}
                </li>
              );
            })}
          </ul>

          <div className="w-[300px]">
            <h4 className="mb-4 text-[15px] font-semibold uppercase tracking-[1px] text-gray-800">
              Contact Us
            </h4>

            <p className="text-[14px] leading-6 text-gray-500">
              Do you have any queries or suggestions?
            </p>

            <p className="mt-1 text-[14px] text-gray-600">
              yourinfo@gmail.com
            </p>

            <p className="mt-5 text-[14px] leading-6 text-gray-500">
              If you need support? Just give us a call.
            </p>

            <p className="mt-1 text-[14px] text-gray-600">
              +55 111 222 333 44
            </p>
          </div>

        </div>
        <div>
<hr className="text-gray-500 mt-5 mb-5" />
  <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
    


    <div className="flex flex-wrap items-center gap-8">
      <div className="flex gap-3 items-center">
        <p>We ship with:</p>
        <FaDhl size={36} className="text-gray-700" />
      </div>

      <div className="flex gap-3 items-center">
        <p>Payment options:</p>
        <div className="flex gap-2 text-gray-700 text-2xl">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
        </div>
      </div>
    </div>

    <p>
      © Copyright 2023 MiniStore. Design by{" "}
      <a href="#" className="font-semibold text-gray-800 hover:underline">
        TemplatesJungle
      </a>
    </p>

  </div>
</div>
      </div>
    </footer>
  );
}

export default Footer;