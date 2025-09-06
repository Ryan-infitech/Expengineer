
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { MusicPlayer } from "./components/MusicPlayer";
import Index from "./pages/Index";
import About from "./pages/About";
import People from "./pages/People";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="expenginer-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/people" element={<People />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <MusicPlayer />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
