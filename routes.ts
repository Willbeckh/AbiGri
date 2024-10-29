/**
 * list of routes that are public
 *
 **/
export const publicRoutes = ["/", "/contact", "/about"];

/**
 * list of routes that are used for authentication
 * These routes will redirect logged in users to /dashboard
 **/
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * the prefix for all api authentication routes
 * 
 type{string}
 **/
export const apiAuthPrefix = "/api/auth"; //

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
