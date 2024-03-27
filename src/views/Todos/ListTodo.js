import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
class ListTodo extends React.Component {
  state = {
    // gần giống lưu trữ dữ liệu tạm thời
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "fixing bug" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Success added!!");
  };
  handleOnChangeEditTodo = (event) => { // gán giá trị mới cho edit todo
    let editTodoCopy = {...this.state.editTodo}; // vì không thể dùng editTodo.title rồi gán nên p đưa về object 
    editTodoCopy.title = event.target.value; // đưa về object rồi gán giá trị
    this.setState({
        editTodo : editTodoCopy 
    })
  }
  handleDeleteTodo = (todo) => {
    console.log(todo);
    let currentState = this.state.listTodos;
    let updatedState = currentState.filter((item) => item !== todo);
    this.setState({
      listTodos: updatedState,
    });
    toast.success("Success delete!!");
  };
  handleEditTodo = (todo) => {
    this.setState({
      editTodo: todo, // gán giá trị cần edit vào edit todo 
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0; // boolean
    console.log(">>> check if empty object: ", isEmptyObj);
    return (
      <>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                // condition ở trong react thay thế if
                return (
                  <>
                    <div className="todo-child" key={item.id}>
                      {isEmptyObj === true ? ( // kiểm tra nếu không có giá trị edit nào được chọn 
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      ) : editTodo === item ? ( // nếu giá trị edit bằng với giá trị bên trong item thì in ra 
                        <span>
                          {index + 1} - <input onChange={(event)=>{this.handleOnChangeEditTodo()}} value={editTodo.title} ></input> 
                        </span>
                      ) : ( //nếu không phải thì không biến đổi thành input 
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}

                      <button
                        className="edit"
                        onClick={() => {
                          this.handleEditTodo(item);
                        }}
                      >
                        edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => {
                          this.handleDeleteTodo(item);
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default ListTodo;
