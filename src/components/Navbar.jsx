import logo from "../assets/pro.png";

export const Navbar = () => {
  return (
    <div className=" bg-slate-200 flex justify-between items-center leading-10 p-5">
      <img src={logo} alt="Logo" className=" h-12 w-20" />
    </div>
  );
};
