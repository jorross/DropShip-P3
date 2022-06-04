import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_ORDER } from '../../utils/mutations';
import { QUERY_ORDERS } from '../../utils/queries';

// add / edit / delete order
// prefer a form layout for the layout of this screen

const Order = () => {
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_ORDERS, {
    variables: { _id: id },
  });

  const order = data?.order || [];

  const [createOrder, { error }] = useMutation(CREATE_ORDER);

  const handleVote = async (techNum) => {
    try {
      await createOrder({});
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here is the order!</h1>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-body text-center mt-3">
          <h2>
            {order[0].tech1} vs. {order[0].tech2}
          </h2>
          <h3>
            {order[0].tech1_votes} : {order[0].tech2_votes}
          </h3>
          <button className="btn btn-info" onClick={() => handleVote(1)}>
            Vote for {order[0].tech1}
          </button>{' '}
          <button className="btn btn-info" onClick={() => handleVote(2)}>
            Vote for {order[0].tech2}
          </button>
          <div className="card-footer text-center m-3">
            <br></br>
            <Link to="/">
              <button className="btn btn-lg btn-danger">
                View all orders
              </button>
            </Link>
          </div>
        </div>
      )}
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Order;
