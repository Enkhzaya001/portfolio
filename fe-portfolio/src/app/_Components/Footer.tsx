import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full text-gray-100 py-4 px-4 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="md:flex md:justify-between w-full text-center md:text-left space-y-1">
          <div className="gap-5">
            <p className="text-lg font-semibold py-2">Enkhzaya Davaakhuu</p>
            <div className="flex items-center justify-center md:justify-start gap-2 py-3 text-sm">
              <FaPhone className="text-gray-400" />
              <span>+976 88722002</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
              <FaEnvelope className="text-gray-400" />
              <span>enhzaya.0111@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <FaGithub className="text-gray-400 text-xl" />
            <span className="font-medium">
              GitHub:
              <a
                href="https://github.com/enkhzaya001"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-blue-400 hover:underline"
              >
                github.com/enkhzaya001
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} Enkhzaya. All rights reserved.
      </div>
    </footer>
  );
}
