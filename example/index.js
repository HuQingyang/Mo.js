
import { Component } from '../index';



class App extends Component {
    constructor(...args) {
        super(...args);
    }

    state = {
        name: 'Joe',
        age: 22,
        f: false
    }

    handleClick = () => {
        this.state.age ++;
    }

    render() { return (
        <div>
            {/*<h1>Hello</h1>*/}
            <p>I'm {this.state.name}.</p>
            <p>I'm {this.state.age} years old.</p>
            <button
                onClick={this.handleClick}
            >Click Me</button>
        </div>
    )}
}



const app = new App();
app.renderTo(document.getElementById('root'));
