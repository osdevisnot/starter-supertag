import { Component, h } from 'supertag'

class MyComponent extends Component {
  render() {
    return <div>Hello World !</div>
  }
}

customElements.define('starter-supertag', MyComponent)
