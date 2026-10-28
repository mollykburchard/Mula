import { useEffect, useRef } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";
import { AdminProvider } from "@/lib/adminContext";
import { ThemeProvider } from "@/lib/themeContext";
import { AdminToolbar } from "@/components/AdminToolbar";
import { BookingPanel } from "@/components/BookingPanel";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Booking from "@/pages/Booking";
import Reviews from "@/pages/Reviews";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Tarieven from "@/pages/Tarieven";
import Blog from "@/pages/Blog";
import BlogPostPage from "@/pages/BlogPost";
import Legal from "@/pages/Legal";
import Admin from "@/pages/Admin";
import ServiceDetail from "@/pages/ServiceDetail";

function ScrollToTop() {
  const [location] = useLocation();
  const prevLocation = useRef<string>(location);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prevLocation.current !== location) {
      prevLocation.current = location;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location]);
  return null;
}

function Router() {
  const [location] = useLocation();
  const isAdmin = location.startsWith("/admin");

  if (isAdmin) {
    return <Admin />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/over-ons" component={About} />
          <Route path="/diensten" component={Services} />
          <Route path="/diensten/:slug" component={ServiceDetail} />
          <Route path="/afspraak" component={Booking} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route path="/tarieven" component={Tarieven} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPostPage} />
          <Route path="/juridisch" component={Legal} />
          <Route path="/legal" component={Legal} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
      <WhatsAppButton />
      <AdminToolbar />
      <BookingPanel />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <LanguageProvider>
            <AdminProvider>
              <Toaster />
              <Router />
            </AdminProvider>
          </LanguageProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
