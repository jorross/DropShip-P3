import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ORDERS } from '../../utils/queries';

// home page
// upon connection, view login screen 
// upon login, view orders page view orders received in a table format
// potential daily manifest with # orders # dollar aggregates
// do we need container page with nav/header/footer to display

const Home = () => {
  const { loading, data } = useQuery(QUERY_ORDERS, {
    fetchPolicy: "no-cache"
  });

  const orderList = data?.order || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Order things!</h1>
      </div>
      <div className="card-body m-5">
        <h2>this is a test </h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {orderList.map((order) => {
              return (
                <li key={order._id}>
                  <Link to={{ pathname: `/order/${order._id}` }}>
                    {/* {order.tech1} vs. {order.tech2} */}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new order?</h2>
        <Link to="/order">
          <button className="btn btn-lg btn-danger">Create order!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
