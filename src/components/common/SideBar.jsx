

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ toggleSidebar, isOpen }) => {


    return (
        <div className=' bg-black z-50 absolute'>
            <button
                onClick={toggleSidebar}
                className="fixed top-4 left-4 z-[61] p-2 bg-gray-950 text-white rounded-md focus:outline-none"
            >
                {isOpen ? 'Close' : 'Open'} Sidebar
            </button>

            <motion.div
                initial={{ x: -250 }}
                animate={{ x: isOpen ? 0 : -250 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-[60]"
            >
                <ul className="p-4 mt-20 flex flex-col gap-5 text-white">
                    <Link to='/feed' className="py-2">Home</Link>
                    <Link to='/feed' className="py-2">Today News</Link>
                    <Link to='/feed' className="py-2">Forums</Link>
                    <Link to='/feed' className="py-2">Top News</Link>

                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 0.5 : 0 }}
                transition={{ duration: 0.3 }}
                className={`fixed top-0 left-0 h-full w-full bg-black pointer-events-${isOpen ? 'auto' : 'none'} z-45`}
                onClick={toggleSidebar}
            ></motion.div>
        </div>
    );
};

export default Sidebar;