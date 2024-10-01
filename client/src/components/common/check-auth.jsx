import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // Allow home page to be public
  if (location.pathname === "/") {
    return <>{children}</>; // Public home page
  }

  // Allow login and register pages to be public
  if (
    !isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    return <>{children}</>; // Public access to login/register
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect authenticated users from login/register to their respective dashboards
  if (isAuthenticated) {
    if (
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    ) {
      return user?.role === "admin" ? (
        <Navigate to="/admin/dashboard" />
      ) : (
        <Navigate to="/shop/home" />
      );
    }

    // Redirect users trying to access admin routes without permission
    if (user?.role !== "admin" && location.pathname.includes("admin")) {
      return <Navigate to="/unauth-page" />;
    }

    // Redirect users to their shop if admin tries to access shop routes
    if (user?.role === "admin" && location.pathname.includes("shop")) {
      return <Navigate to="/admin/dashboard" />;
    }
  }

  return <>{children}</>; // Render the protected children otherwise
}

export default CheckAuth;
