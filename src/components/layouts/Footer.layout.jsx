

const Footer = () => {
  return (
    <footer
      
      className=" py-8 mt-10"
      >
          <div className="flex items-center gap-2 w-full mt-28 mb-4 justify-between">
                <div className="h-[3px] w-[40%] rounded-full bg-blue-600 shadow-2xl" />
                <div className="h-[3px] w-[30%] rounded-full bg-orange-600" />
                <div className="h-[3px] w-[20%] rounded-full bg-gray-600"/>
            </div>  
      <div className="container mx-auto flex flex-wrap justify-between items-center px-3 ">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">Daily Tech Blog</h2>
          <span className="text-sm text-gray-500 ml-2">© 2023</span>
        </div>
        <div className="text-sm text-gray-500 mt-4 md:mt-0">
          <p>Follow me:</p>
          <div className="flex mt-2">
            <a
              href="https://twitter.com/programmer_dex"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-500 mr-2"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-500 mr-2"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-500"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
