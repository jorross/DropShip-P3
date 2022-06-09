import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./components/pages/Home";
import Header from "./components/Header";
// import User from './components/pages/User';
import Order from "./components/pages/Order";
import Product from "./components/pages/Product.js";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/SignIn";
import Signup from "./components/pages/SignUp";

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>

          <Header />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              {/* <Route 
                path="/login" 
                element={<Login />} 
                /> */}
              {/* <Route 
                  path="/user" 
                  element={<User />}
              /> */}
              <Route 
                path="/order" 
                element={<Order />} 
              />
              <Route 
                path="/product" 
                element={<Product />} 
              />
              <Route 
                path="*" 
                element={<NotFound />} 
              />
            <Route 
            path="/login" 
            element={<Login />} 
            />
            <Route 
            path="/signup" 
            element={<Signup />} 
            />
          </Routes>
      </Router>
      
    </ApolloProvider>
  );
}

export default App;
