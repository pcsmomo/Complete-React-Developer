import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selector";

import { firestore } from "../../firebase/firebase.utils";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  // useEffect(() => {
  //   console.log("I am subscribing");
  //   const unsubscribeFromCollections = firestore
  //     .collection("collections")
  //     .onSnapshot(async (snapshot) => console.log(snapshot));

  //   return () => {
  //     console.log("I am unsubscribing");
  //     unsubscribeFromCollections();
  //   };
  // }, []);

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
