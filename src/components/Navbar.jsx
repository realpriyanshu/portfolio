import github from "../assets/github.png";
import linkdin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

export function Navbar() {
  return (
    <>
      <div className="h-11 w-2/4 mt-10 flex justify-between animate-blur-fade-in animate-blur-fade-in">
        <h1 className="text-2xl mt-2 text-white font-semibold">priyanshu mewada</h1>
        <div className="flex mt-1 items-center">
          {/* GitHub */}
          <a href="https://github.com/realpriyanshu/" target="_blank" rel="noopener noreferrer">
            <img
              src={github}
              className="h-5 w-5 ml-4 rounded-lg transition-transform duration-200 hover:scale-110 hover:brightness-125 hover:shadow-[0px_0px_10px_rgba(255,255,255,1.0)]"
              alt="GitHub"
            />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/priyanshu-mewada-53a7b2249/" target="_blank" rel="noopener noreferrer">
            <img
              src={linkdin}
              className="h-5 w-5 ml-4 transition-transform duration-200 hover:scale-110 hover:brightness-125 hover:shadow-[0px_0px_8px_rgba(255,255,255,1.0)]"
              alt="LinkedIn"
            />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/priyanshumewad4" target="_blank" rel="noopener noreferrer">
            <img
              src={twitter}
              className="h-5 w-5 ml-4 transition-transform duration-200 hover:scale-110 hover:brightness-125 hover:shadow-[0px_0px_8px_rgba(255,255,255,1.0)]"
              alt="Twitter"
            />
          </a>

          {/* Email */}
          <h6 className="text-xs ml-4 text-gray-500 mt-1 hover:text-white transition-colors duration-200">
            priyanshumewada02@gmail.com
          </h6>
        </div>
      </div>
    </>
  );
}
