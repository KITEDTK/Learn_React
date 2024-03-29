import React from "react";  
import { withRouter } from "react-router";
import Color from "../HOC/Color";
class Home extends React.Component{

    // componentDidMount(){
    //     setTimeout(()=>{
    //         console.log('checkTimeout');
    //         //this.props.history.push('/todos');
    //         console.log(this.props);
    //     },3000);
    // }
    render(){
        return(
            <div>Hello world from Homepage with Kite</div>
        )
    }
}

//export default withRouter(Home);
export default Color(Home);