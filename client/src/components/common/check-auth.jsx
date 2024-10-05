import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log({ pathname: location.pathname, authenticated: isAuthenticated });

  if (location.pathname === "/") {
    return <Navigate to="/shop/home" />;
  }

  // Handle login and register routes when user is already authenticated
  if (
    location.pathname.includes("/auth/login") ||
    location.pathname.includes("/auth/register")
  ) {
    if (isAuthenticated) {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }
  }

  // Check authentication for other routes
  if (!isAuthenticated && location.pathname.includes("/auth/login")) {
    return <Navigate to="/auth/login" />;
  } else if (!isAuthenticated && location.pathname.includes("/auth/register")) {
    return <Navigate to="/auth/register" />;
  }

  // Render children if authenticated and on a valid path

  return <>{children}</>;
}

export default CheckAuth;
