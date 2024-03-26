import React from "react";

class ChildComponent extends React.Component{

    /*
    JSX => return block (block có thể là 1 khối <div></div>, <span></span>,...(trả về 1 phần tử của HTML))

    */

    state = {
        firstName: '',
        lastName: '',
    }
    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        console.log('>>state:', this.state);
    }
    render(){
        console.log('>>render', this.state);
        return (
            <> 
                {/* <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input
                    onChange={(event)=>{this.handleChangeFirstName(event)}}
                    type="text" value={this.state.firstName}/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input
                    onChange={(event)=>{this.handleChangeLastName(event)}}
                    type="text" value={this.state.lastName}/><br/><br/>
                    <input type="submit" value="Submit"
                    onClick={(event)=>{this.handleSubmit(event)}}/>
                </form>  */}
                <div>ChildComponent: {this.props.name}</div>
            </>
        );

    }
}
export default ChildComponent;