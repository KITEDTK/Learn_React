import React from "react";
import Color from "../HOC/Color";
import { connect } from "react-redux";
class Home extends React.Component {
  handleDeleteUser = (user) => {
    //console.log(user);
    this.props.deleteUserRedux(user); //gọi hàm từ redux
  };
  handleCreteUser = ()=>{
    this.props.createUserRedux();
  }
  render() {
    console.log(">>>check props redux", this.props.dataRedux);
    let listUsers = this.props.dataRedux;

    return (
      <>
        <div>Hello world from Homepage with Kite</div>
        <button onClick={()=> this.handleCreteUser()}>Add</button>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}
                  &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

//export default withRouter(Home);
const mapStateToProps = (state) => {
  //map state
  // gọi redux chỉ trong component này
  return { dataRedux: state.users }; // truyền data redux vào props
};

const mapDispatchToProps = (dispatch) => {
  //map action
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete /*Tham số truyền vào payload*/  }), // khai báo hàm action

    createUserRedux: () => dispatch({ type: "CREATE_USER" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
