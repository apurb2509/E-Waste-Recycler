// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import ClassifyPage from "./pages/ClassifyPage";
// import LearnPage from "./pages/LearnPage";
// import AboutPage from "./pages/AboutPage";

// const queryClient = new QueryClient();

// const App = () => {
//   return ( 
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/classify" element={<ClassifyPage />} />
//             <Route path="/learn" element={<LearnPage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClassifyPage from "./pages/ClassifyPage";
import LearnPage from "./pages/LearnPage";
import AboutPage from "./pages/AboutPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
            <h1 className="text-lg font-bold">Eco-Recycle</h1>
            <nav>
              <SignedOut>
                <button className="bg-primary-500 hover:bg-primary-600 transition-colors text-white px-4 py-2 rounded-md">
                  <SignInButton mode="modal" />
                </button>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/classify" element={<ClassifyPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;