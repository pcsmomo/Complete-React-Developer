import React from "react";

import Card from "../card/card.component";

const User = ({ userId }) => {
  const user = null;

  return (
    <Card>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </Card>
  );
};

export default User;
