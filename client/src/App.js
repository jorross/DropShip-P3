import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './components/pages/Home';
// import User from './components/pages/User';
import Order from './components/pages/Order';
import Product from './components/pages/Product.js';
import NotFound from './components/pages/NotFound';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            {/* <Route 
              path="/user" 
              element={<User />}
            /> */}
            <Route 
              path="/matchup/:id" 
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
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
