import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { SinglePage } from "./components/SinglePage";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-5">
      <h1 className="text-6xl mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>404</h1>
      <p className="text-xl text-[var(--ink-body)] mb-8">Page not found</p>
      <a href="/" className="bg-[var(--brand-navy)] text-[var(--brand-cream)] px-6 py-3 rounded-full font-bold">Go home →</a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: SinglePage },
      { path: "sky-rangers", element: <Navigate to="/#programmes" replace /> },
      { path: "brave-voices", element: <Navigate to="/#programmes" replace /> },
      { path: "*", Component: NotFound },
    ],
  },
]);
