import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="min-h-[60px] text-gray-400 bg-gradient-to-b from-gray-700 via-teal-800 to-stone-600 flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-4">
        <p className="text-xs italic">
          © 6-29 Faheem Khan. All rights reserved.
        </p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://web.facebook.com/profile.php?id=61555776824318"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/faheem-khan-295a212b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="https://github.com/Faheemzai4" // your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100"
          >
            <FaGithub size={20} />
          </a>

          {/* Phone Option */}
          <a
            href="tel:+92309227732" // replace with your actual number
            className="hover:text-green-400 flex items-center"
          >
            <FaPhoneAlt size={21} />
          </a>

          {/* Email */}
          <Link href="/contact" className="hover:text-red-500 flex items-center">
            <HiOutlineMail size={22} />
          </Link>


        </div>
      </div>
    </footer>
  );
}
