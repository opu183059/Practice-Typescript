import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import HomePageLayout from "./components/pages/homepage/HomePageLayout.tsx";
import GraphQlMainPageLayout from "./components/pages/graphQl/GraphQlMainPageLayout.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: (
      <h1>
        The page you are looking for is not available please go to
        <Link to={"/"}>Home Page</Link>
      </h1>
    ),
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
      },
      {
        path: "/graphql",
        element: <GraphQlMainPageLayout></GraphQlMainPageLayout>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
