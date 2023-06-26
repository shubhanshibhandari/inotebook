import React, { useContext } from "react";
import Notes from "./Notes";

export const Home = () => {
  return (
    <>
      <div>
        <h2>Add Note</h2>
      </div>
      <div className="form">
        <form>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </form>
      </div>

      <Notes>
        
      </Notes>
    </>
  );
};
