import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  const { pathname } = useLocation();
  const bgColor = pathname === "/sky-rangers"
    ? "bg-[#fff6e1]"
    : pathname === "/brave-voices"
    ? "bg-[#fdf5e8]"
    : "bg-[#faf7f0]";

  return (
    <>
      <ScrollToTop />
      <Nav bgColor={bgColor} />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
