export const Navbar = () => {

  return(
    <div className="absolute right-0 top-0 h-14 w-64 text-white bg-transparent border-b-2  border-l-2 border-[#5c5c5c] rounded-bl-2xl flex flex-row justify-around items-center">
      <div className="h-full flex flex-row items-center justify-center w-1/3  hover:text-blue-300 hover:cursor-pointer">About</div>
      <div className="border-x-2 border-[#5c5c5c] h-full flex flex-row items-center justify-center w-1/3  hover:text-blue-300 hover:cursor-pointer">Resume</div>
      <div className="h-full flex flex-row items-center justify-center w-1/3  hover:text-blue-300 hover:cursor-pointer">Contact</div>

    </div>
  )
};