import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
   // 1. Get the current URL path (e.g., "/", "/about", "/contact")
  const { pathname } = useLocation();

    // 2. Trigger the effect whenever 'pathname' changes
  useEffect(() => {
        // 3. Scroll the window to the very top (x: 0, y: 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
