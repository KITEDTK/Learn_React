import React from "react";
import {toast } from 'react-toastify';
class AddTodo extends React.Component{
    //khi có input luôn phải set state thì mới có thể lưu giá trị
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnClickAddTodo = () => {
        if(!this.state.title){
            toast.error('Missing Data');
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1234),
            title : this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render(){
        let {title} = this.state;
        return (
        <>
            <div className="add-todo">
                <input type="text" value={title} onChange={
                    (event)=>{this.handleOnChangeTitle(event)}
                }/> 
                <button type="button" onClick={()=>this.handleOnClickAddTodo()}>Add</button>
            </div>        
        </>
        );
    }
}
export default AddTodo