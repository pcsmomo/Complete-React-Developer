import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { flowRight } from "lodash";

import CartIcon from "./cart-icon.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = ({ data: { itemCount }, mutate }) => {
  const toggleCartHidden = mutate;
  return <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />;
};

export default flowRight(
  graphql(GET_ITEM_COUNT),
  graphql(TOGGLE_CART_HIDDEN)
)(CartIconContainer);

/** Extra query and mutation for a test */
/** Cannot receive two queries nor mutations.
 * The second one overwrites the first one.
 * Query comes to "data" and Mutation comes to "mutate".
 */

// const GET_CART_HIDDEN = gql`
//   {
//     cartHidden @client
//   }
// `;

// const ADD_ITEM_TO_CART = gql`
//   mutation AddItemToCart($item: Item!) {
//     addItemToCart(item: $item) @client
//   }
// `;

// const CartIconContainer = (props) => {
//   console.log(props);
//   return <CartIcon />;
// };

// export default flowRight(
//   graphql(GET_ITEM_COUNT),
//   graphql(GET_CART_HIDDEN),
//   graphql(TOGGLE_CART_HIDDEN),
//   graphql(ADD_ITEM_TO_CART)
// )(CartIconContainer);
