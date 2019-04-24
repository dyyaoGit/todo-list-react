import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'todo内容',
            isEdit: false,
            isDone: false
        }
    }

    handleChange = (e) => {
        const value = e.target.type === 'checkbox'? e.target.checked: e.target.value
        this.setState({
            [e.target.name]: value,
        })
    }

    handleDoubleClick = () => {
        this.setState({
            ...this.state,
            isEdit: true
        }, () => {
            this.refs.editor.focus();
            this.refs.editor.value = this.state.text;
        })

    }

    handleBlur = ()=> {
        this.setState({
            ...this.state,
            isEdit: false
        })
    }

    render() {
        const _this = this;
        const isShowEdit = () => {
            if(!_this.state.isEdit){
                return  (
                    <div className="todo-item-body">
                        132
                        <input type="checkbox" name="isDone" value={_this.state.isDone} onChange={_this.handleChange}  />
                        <span className={
                            this.state.isDone?'isDone': ''
                        }
                              onDoubleClick={this.handleDoubleClick}
                        >{this.state.text}</span>
                        <button>删除该todo</button>
                    </div>
                )
            } else {
                return (
                    <div className="todo-item-editor">
                        <input type="text"
                               onBlur={this.handleBlur}
                               ref="editor" name="text" onChange={this.handleChange} />
                    </div>
                )
            }
        }

        return (
            <li className="todo-item">
                {
                    isShowEdit()
                }
            </li>
        )
    }
}

export default TodoItem;