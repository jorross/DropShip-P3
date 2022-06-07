import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ORDERS, QUERY_PRODUCTS } from "../../utils/queries";
import Auth from "../../utils/auth";

// home page
// upon connection, view login screen
// upon login, view orders page view orders received in a table format
// potential daily manifest with # orders # dollar aggregates
// do we need container page with nav/header/footer to display

// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };

const Home = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    fetchPolicy: "no-cache",
  });

  const productList = data?.product || [];

  console.log(productList);

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Homepage</h1>
          </Link>
          <p className="m-0">Catchy Slogan Here</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2">Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Home;
