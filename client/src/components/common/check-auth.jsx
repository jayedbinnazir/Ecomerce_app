import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log({ pathname: location.pathname, authenticated: isAuthenticated });

  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/shop/home" />;
    } else if (isAuthenticated && user?.role === "admin") {
      return <Navigate to={"/admin/dashboard"} />;
    } else {
      return <Navigate to={"/shop/home"} />;
    }
  }

  if (location.pathname.includes("admin")) {
    if (!isAuthenticated) {
      return <Navigate to={"/auth/login"} />;
    }
  }

  if (
    location.pathname === "/auth/login" ||
    location.pathname === "/auth/register"
  ) {
    // Prevent loop by only redirecting away if authenticated
    if (isAuthenticated) {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }
  } else {
    // Check if user is authenticated for other routes
    if (!isAuthenticated && location.pathname === "/auth/login") {
      return <Navigate to="/auth/login" />;
    } else if (!isAuthenticated && location.pathname === "/auth/register") {
      return <Navigate to={"/auth/register"} />;
    }
  }

  // Render children if authenticated and on a valid path

  return <>{children}</>;
}

export default CheckAuth;
