import React from "react";
import { Link } from "react-router-dom";

function Home({ logOut, loggedinUser }) {
  //   const history = useHistory();
  //   useEffect(() => {
  //     if (loggedinUser === "") history.push("/login");
  //   }, [loggedinUser, history]);

  return (
    <div>
      <h1> "Well Done, you did it" </h1>
      <Link to="/login">
        {" "}
        <button onClick={{ logOut }}>LogOut</button>{" "}
      </Link>
    </div>
  );
}

export default Home;
