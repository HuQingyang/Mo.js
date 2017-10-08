
import { F, FDom } from '../lib';
import createElement from 'virtual-dom/create-element';



class App extends F {
    constructor() {
        super();
        this.state = {
            name: 'Joe',
            age: 10
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() { return (
        <div>
            <h3>My name is {this.state.name}</h3>
            <h4>And I'm {this.state.age} years old</h4>
            <button onclick={this.handleClick}>Click</button>
        </div>
    )}
}


const app = new App();
app.renderTo(document.getElementById('root'));
