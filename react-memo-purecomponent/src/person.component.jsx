import React from "react";

const Person = ({ person }) => {
  console.log("rendering");
  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
    </div>
  );
};

export default React.memo(Person); // memo is good but it costs
// export default Person;

// class Person extends React.PureComponent {
//   render() {
//     const { person } = this.props;

//     return (
//       <div>
//         <p>{person.name}</p>
//         <p>{person.age}</p>
//       </div>
//     );
//   }
// }

// export default Person;
