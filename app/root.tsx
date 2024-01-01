import type { LinksFunction } from "@vercel/remix";
import tailwind from "~/tailwind.css";
import Layout from "./components/Layout";
import favicon16 from "./assets/favicons/favicon-16x16.png";
import favicon32 from "./assets/favicons/favicon-32x32.png";
import ogimage from "./assets/images/ogimage.png";

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "true",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <meta name="theme-color" content="#ffffff"></meta>

        <meta property="og:title" content="Tomasz Posiadala Portfolio website" />
        <meta property="og:description" content="Tomasz Posiadala - Front-end Developer Portfolio, Blog and more" />
        <meta property="og:image" content={ogimage} />

        <Meta />
        <Links />
      </head>
      <body className="text-primary text-base font-body flex flex-col min-h-screen max-w-screen bg-primary">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html lang="en">
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="w-screen h-screen flex justify-center items-center">
        <h1 className=" flex flex-col items-center">
          <span className="text-5xl font-secondary font-black">404</span>
          <span className="font-secondary text-2xl font-black">Page not found</span>
          <Link to="/" className="px-20 py-5 text-base font-normal mt-20 bg-secondary text-secondary font-primary">
            Homepage
          </Link>
        </h1>
        <Scripts />
      </body>
    </html>
  );
}
