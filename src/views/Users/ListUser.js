import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";


class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [], //Kiểm tra điều kiện nếu có thì gán res.data.data vào state 
    });
    console.log(res.data.data);
  }
  handleViewDetailUser = (user) => { 
    this.props.history.push(`/user/${user.id}`); // chuyển trang 
  }
  render() {
    let { listUser } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list user</div>
        <div className="list-user-content">
          {listUser && 
            listUser.length > 0 && // check điều kiện nếu listuser không rỗng mới in ra 
            listUser.map((item, index) => {
              return <div className="child" key={item.id} onClick={()=>{
                this.handleViewDetailUser(item);
              }}> 
                {index+1} - {item.first_name} {item.last_name}
              </div>;
            })}
        </div>
      </div>
    );
  }
}
export default withRouter(ListUser);
