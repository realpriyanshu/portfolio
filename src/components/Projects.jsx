import { useState } from "react";

export function Projects() {
  const [activeTab, setActiveTab] = useState("webapps");

  return (
    <div className=" w-4xl text-white text-sm animate-blur-fade-in">
      {/* Buttons */}
      <div className="ml-6 space-x-10 mb-4">
        <button
          onClick={() => setActiveTab("webapps")} // ✅ Updates only when clicked
          className={`px-2 py-1 rounded-lg ${
            activeTab === "webapps" ? "bg-green-600" : "bg-gray-700"
          }`}
        >
          web apps
        </button>

        
        <button
          onClick={() => setActiveTab("fun")} // ✅ Updates only when clicked
          className={`px-2 py-1 rounded-lg ${
            activeTab === "fun" ? "bg-blue-500" : "bg-gray-700"
          }`}
        >
          fun
        </button>
      </div>

      {/* Content */}
      <div className="p-4  border border-gray-700 rounded-lg">
        {activeTab === "webapps" && <div>
        <p className="hover:text-blue-400"><a href="https://unity-pages-frontend.vercel.app/">unity pages  </a><span className="text-gray-500">: create collabrative documents ,real time updates ,easy url sharing.</span></p>
        <p className="mt-2 hover:text-blue-400"><a href="https://ghostnett.netlify.app/">ghost-net </a> <span className="text-gray-500">: anonymously chat on server , create private chat rooms, url sharing connectivity.</span></p>
        <p className="mt-2 hover:text-blue-400"><a href="https://paytm-d.vercel.app/">paytm clone </a> <span className="text-gray-500"> : paytm clone developed to understand and practice web development concepts.</span></p>
        </div>}


        {activeTab === "fun" && <p className="mt-2 hover:text-blue-400"><a href="https://realpriyanshu.github.io/sundown/">sundown clone </a><span className="text-gray-500">: landing page</span> </p>}
      </div>
    </div>
  );
}
