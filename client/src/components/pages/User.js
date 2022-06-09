import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_USERS, QUERY_PRODUCTS, QUERY_ORDERS } from "../../utils/queries";
import { CREATE_ORDER } from "../../utils/mutations";

// add users
// do we display user list on same screen as adding users?

const User = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const userList = data?.user || [];

  let navigate = useNavigate();

  // const [createUser, { error }] = useMutation(CREATE_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createUser({
        variables: { ...formData },
      });

      navigate(`/users/${data.createUser._id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create a matchup!</h1>
      </div>
      <div className="card-body m-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label>User 1: </label>
            <select name="user1" onChange={handleInputChange}>
              {userList.map((user) => {
                return (
                  <option key={user._id} value={user.username}>
                    {user.username}
                  </option>
                );
              })}
            </select>
            <label>user 2: </label>
            <select name="user2" onChange={handleInputChange}>
              {userList.map((user) => {
                return (
                  <option key={user._id} value={user.username}>
                    {user.username}
                  </option>
                );
              })}
            </select>
            <button className="btn btn-danger" type="submit">
              Create User!
            </button>
          </form>
        )}
      </div>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default User;
