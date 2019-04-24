import React from 'react';

class Index extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div className="todo-header">
                <input type="text" placeholder="你今天想做什么?" />
            </div>
        )
    }
}

export default Index;