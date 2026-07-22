import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import {
  createBrowserRouter,
  NonIndexRouteObject,
  RouterProvider,
} from "react-router";
import { ThemeContextProvider } from "@barrelrolla/react-components-library";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import BioLayout from "./layouts/BioLayout";
import RootLayout from "./layouts/RootLayout";
import { navLinks } from "./data/navLinks";
import CertificatePage from "./pages/CertificatePage";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { MotionConfig } from "motion/react";

const navRoutes: NonIndexRouteObject[] = navLinks.map((link) => {
  return {
    path: link.path,
    element: <BioLayout title={link.path} />,
    children: [
      { index: true, Component: link.element },
      {
        path: ":id",
        Component: DetailsPage,
      },
    ],
  };
});

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      ...navRoutes,
      {
        path: "certificate/:id",
        Component: CertificatePage,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeContextProvider value={{ buttonsRetainFocus: false }}>
        <MotionConfig reducedMotion="user">
          <RouterProvider router={router} />
          <Analytics />
          <SpeedInsights />
        </MotionConfig>
      </ThemeContextProvider>
    </HelmetProvider>
  </StrictMode>,
);
