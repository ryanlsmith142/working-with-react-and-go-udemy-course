import React, { Component } from 'react';

export default class AppContent extends Component {

    state = {posts: []}

    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(json => {
                this.setState({posts: json});
            })
    }
    clickedItem = (x) => {
        console.log("Clicked", x);
    }
    render() {
        return (
            <div>
                This is the content.
                <br />
                <hr />
                <p onMouseEnter={this.anotherFunction}>This is some text.</p>

                <button onClick={this.fetchList} className="btn btn-primary" href='#'>Fetch Data</button>

                <hr />

                <p>Posts is {this.state.posts.length} items long</p>
                <ul>
                    {this.state.posts.map((c) => (
                        <li key={c.id}>
                            <a href="#!" onClick={() => this.clickedItem(c.id)}>
                                {c.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}