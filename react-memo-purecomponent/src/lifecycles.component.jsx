import React from "react";

// PureComponent is the same as shouldComponentUpdate works here
class Lifecycles extends React.PureComponent {
  constructor() {
    super();
    console.log("constructor!");
  }

  componentDidMount() {
    console.log("componentDidMount!");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate!");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate!", nextProps);
    return nextProps.text !== this.props.text;
  }

  render() {
    return <div>Life Cycles</div>;
  }
}

export default Lifecycles;
