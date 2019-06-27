import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloWorld extends Component {
    render() {
        return (
            <div className="text-center">
                <h1 className="red">Hello World</h1>
            </div>
        );
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));