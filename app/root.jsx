import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { AppProvider } from "@shopify/polaris";
import AppNavigation from "./components/AppNavigation";

import "@shopify/polaris/build/esm/styles.css";

// eslint-disable-next-line react/prop-types
export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <AppProvider i18n={{}}>
      <AppNavigation />
      <Outlet />
    </AppProvider>
  );
}
