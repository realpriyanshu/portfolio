import { useState } from "react";
import { easeInOut, motion } from "framer-motion";

export function Projects() {
  const [activeTab, setActiveTab] = useState("webapps");

  return (
    <div className="w-full max-w-4xl text-white text-sm animate-blur-fade-in px-4 sm:px-0">
      {/* Buttons */}
      <div className="flex flex-wrap justify-start space-x-4 sm:space-x-10 mb-4">
        <button
          onClick={() => setActiveTab("webapps")}
          className={`px-2 py-1 rounded-lg hover:scale-95 transition-transform ${
            activeTab === "webapps" ? "bg-green-600" : "bg-gray-700"
          }`}
        >
          web apps
        </button>

        <motion.button
          whileHover={{ rotate: 20, rotateX: 20, rotateY: 360 }}
          style={{ translateZ: 100 }}
          transition={{ duration: 0.2, ease: easeInOut }}
          onClick={() => setActiveTab("fun")}
          className={`px-2 py-1 rounded-lg ${
            activeTab === "fun" ? "bg-blue-500" : "bg-gray-700"
          }`}
        >
          fun
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-4 border border-gray-700 rounded-lg">
        {activeTab === "webapps" && (
          <div>
            <p className="hover:text-blue-400">
              <a href="https://unity-pages-frontend.vercel.app/">unity pages </a>
              <span className="text-gray-500">: create collaborative documents, real-time updates, easy URL sharing.</span>
            </p>
            <p className="mt-2 hover:text-blue-400">
              <a href="https://ghost-net-theta.vercel.app/">ghost-net </a>
              <span className="text-gray-500">: anonymously chat on server, create private chat rooms, URL sharing connectivity.</span>
            </p>
            <p className="mt-2 hover:text-blue-400">
              <a href="https://paytm-d.vercel.app/">paytm clone </a>
              <span className="text-gray-500">: paytm clone developed to understand and practice web development concepts.</span>
            </p>
          </div>
        )}

        {activeTab === "fun" && (
          <p className="mt-2 hover:text-blue-400">
            <a href="https://realpriyanshu.github.io/sundown/">sundown clone </a>
            <span className="text-gray-500">: landing page</span>
          </p>
        )}
      </div>
    </div>
  );
}
