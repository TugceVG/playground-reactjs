import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Page({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="page">{children}</div>;
}
