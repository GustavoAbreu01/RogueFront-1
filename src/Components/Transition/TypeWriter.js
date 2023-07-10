import React from 'react';

class TypeWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      txt: '',
    };
  }

  componentDidMount() {
    const tag = document.getElementById("text");
    const html = document.getElementById("text").innerHTML;
    tag.setAttribute("data", html);
    const txt = tag.getAttribute("data");
    this.setState({ txt }, () => {
      this.typeWriter();
    });
  }

  typeWriter() {
    const { i, txt } = this.state;
    const speed = 20;

    if (i <= txt.length) {
      document.getElementById("text").innerHTML = txt.slice(0, i + 1);
      this.setState({ i: i + 1 });
      setTimeout(() => this.typeWriter(), speed);
    }
  }

  render() {
    return <div id="text"></div>;
  }
}

export default TypeWriter;