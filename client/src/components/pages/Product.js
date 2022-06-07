// add / edit / delete product
// prefer a form layout for the layout of this screen
import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
// import { CREATE_ORDER } from '../../utils/mutations';
import { QUERY_PRODUCTS } from "../../utils/queries";

// add / edit / delete order
// prefer a form layout for the layout of this screen

const Product = () => {
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    variables: { _id: id },
  });

  const products = data?.product || [];

  //   const [createOrder, { error }] = useMutation(CREATE_ORDER);

  //   const handleVote = async (techNum) => {
  //     try {
  //       await createOrder({});
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here are the products!</h1>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-body text-center mt-3">
          <h2>{products[0]}</h2>
          <button className="btn btn-info">Vote for {products[0]}</button>{" "}
          <div className="card-footer text-center m-3">
            <br></br>
            <Link to="/">
              <button className="btn btn-lg btn-danger">View all products</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
