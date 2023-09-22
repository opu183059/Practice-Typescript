const Navbar = () => {
  return (
    <div className="w-full shadow-lg fixed z-50 bg-white">
      <div className="container">
        <div className="flex justify-between py-4 ">
          <div className="logo">TypeScript</div>
          <div className="right">
            <div className="menu">
              <a href="#home">Home</a>
              <a href="#persons">Persons</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
