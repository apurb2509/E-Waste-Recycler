
// import React, { useState } from 'react';
// import { Menu, X, Leaf } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center space-x-2">
//               <Leaf className="h-8 w-8 text-primary-500" />
//               <span className="font-poppins font-bold text-xl text-gray-800">E-WasteMate</span>
//             </Link>
//           </div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium">
//               Home
//             </Link>
//             <Link to="/classify" className="text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium">
//               Classify E-Waste
//             </Link>
//             <Link to="/learn" className="text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium">
//               Learn
//             </Link>
//             <Link to="/about" className="text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium">
//               About
//             </Link>
//             {/* <a 
//               href="#" 
//               className="bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors"
//             >
//               Get Started
//             </a> */}
//           </div>
          
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu} className="text-gray-700 hover:text-primary-500">
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
//             <Link 
//               to="/"
//               className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/classify"
//               className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               Classify E-Waste
//             </Link>
//             <Link 
//               to="/learn"
//               className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               Learn
//             </Link>
//             <Link 
//               to="/about"
//               className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </Link>
//             <a 
//               href="#" 
//               className="bg-primary-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-600"
//               onClick={() => setIsOpen(false)}
//             >
//               Get Started
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Menu, X, Leaf } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center space-x-2">
//               <Leaf className="h-8 w-8 text-primary-500" />
//               <span className="font-poppins font-bold text-xl text-gray-800">E-WasteMate</span>
//             </Link>
//           </div>

//           {/* Navbar Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium">
//               Home
//             </Link>
//             <Link to="/classify" className="text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium">
//               Classify E-Waste
//             </Link>
//             <Link to="/learn" className="text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium">
//               Learn
//             </Link>
//             <Link to="/about" className="text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium">
//               About
//             </Link>

//             {/* Clerk Authentication */}
//             <SignedOut>
//               <SignInButton>
//                 <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium transition">
//                   Sign In
//                 </button>
//               </SignInButton>
//             </SignedOut>
//             <SignedIn>
//               <UserButton afterSignOutUrl="/" />
//             </SignedIn>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu} className="text-gray-700 hover:text-primary-500">
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
//             <Link to="/" className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
//               Home
//             </Link>
//             <Link to="/classify" className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
//               Classify E-Waste
//             </Link>
//             <Link to="/learn" className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
//               Learn
//             </Link>
//             <Link to="/about" className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
//               About
//             </Link>

//             {/* Authentication for Mobile View */}
//             <SignedOut>
//               <SignInButton>
//                 <button className="bg-primary-500 hover:bg-primary-600 text-white block px-3 py-2 rounded-md text-base font-medium transition">
//                   Sign In
//                 </button>
//               </SignInButton>
//             </SignedOut>
//             <SignedIn>
//               <UserButton afterSignOutUrl="/" />
//             </SignedIn>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary-500" />
              <span className="font-poppins font-bold text-xl text-gray-800">E-WasteMate</span>
            </Link>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/classify" className="text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium">
              Classify E-Waste
            </Link>
            <Link to="/learn" className="text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium">
              Learn
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium">
              About
            </Link>

            {/* Clerk Authentication with Modal */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-primary-500">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/classify" className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Classify E-Waste
            </Link>
            <Link to="/learn" className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Learn
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              About
            </Link>

            {/* Authentication for Mobile View */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-primary-500 hover:bg-primary-600 text-white block px-3 py-2 rounded-md text-base font-medium transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

