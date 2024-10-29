import { useNavigate } from "react-router";
import { LogoIcon } from "../icons/icon";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 text-white h-14 flex items-center">
      <div className="wrapper-container w-full">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <LogoIcon />
          <p className="front-semibold">
            <span className="text-yellow-500">C</span>ryto
            <span className="text-yellow-500">U</span>pdate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
