import React, { Component } from 'react'

export default class BookShelf extends Component {
    state = {
        test: 'This is working!'
    }
    render() {
        return (
            <div>
                <p>{this.state.test}</p>
            </div>
        )
    }
}
