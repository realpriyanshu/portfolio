export function Bio() {
  return (
    <>
      <div>
        <div className="flex space-x-1 mt-1">
          {" "}
          <li>mern-stack engineer based in </li>
          <a href="https://en.wikipedia.org/wiki/Sehore" className="text-white hover:text-yellow-500">
            {" "}
            india .
          </a>
        </div>
        <div className="mt-2">
          <div className="flex space-x-1">
            
            <li>currently exploring aws cloud </li>
          </div>
        </div>

        <div className="flex space-x-2 mt-2">
          <li>aws practitioner certified </li>{" "}
          <a href="https://www.credly.com/badges/eedf58ea-089e-4946-a634-8ed3a6cd16fe" className="text-white  hover:text-yellow-500">
            *view* .
          </a>
        </div>
        <div className="flex space-x-2 mt-2">
          <li>github action certified </li>{" "}
          <a href="https://www.credly.com/badges/56541bb6-ad59-4e61-b79d-51e5e0c90ae3/public_url" className="text-white  hover:text-yellow-500">
            *view* .
          </a>
        </div>

       
      </div>
    </>
  );
}
