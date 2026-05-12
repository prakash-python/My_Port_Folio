import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component ensures that the page scroll position is reset to the top
 * whenever the route changes in a React Router application.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scrolling can sometimes be jittery if not handled carefully,
    // but for route changes, a clean jump to top is usually preferred.
    // window.scrollTo({ top: 0, behavior: "instant" }); // "instant" is often better for route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
