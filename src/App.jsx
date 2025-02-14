import "./App.css";
import { Navbar } from "./components/Navbar";
import { Bio } from "./components/Bio";
import { Projects } from "./components/Projects";
import { Achivements } from "./components/Achivements";
import { Resume } from "./components/Resume";

function App() {
  return (
    <div className="min-w-full min-h-screen bg-zinc-900 flex flex-col items-center">
      {/* Navbar */}
      <div className="w-full flex justify-center">
        <Navbar />
      </div>

      {/* Content Wrapper */}
      <div className="w-full max-w-4xl px-4 sm:px-6 mt-5 text-gray-500">
        <Bio />
        <div className="mt-10">
          <Projects />
        </div>
        <div className="mt-8">
          <Achivements />
        </div>
        <div className="mt-8">
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;
