const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">Weeb</h2>
            <p className="text-gray-400 mt-2">By Raouf Khemissat.</p>
          </div>
  
          <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-gray-300">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
  
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
  
        <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} MySite. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  