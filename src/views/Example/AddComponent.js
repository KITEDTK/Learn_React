import React from "react";
class AddComponent extends React.Component{

    state = {
        jobTitle: '',
        salary: '',
    }
    handleChangeJobTitle = (event) =>{
        this.setState({
            jobTitle: event.target.value
        })
    }
    handleChangeSalary = (event) =>{
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault(); // không làm mới trang
        if(!this.state.jobTitle || !this.state.salary){
            alert('missing data');
            return ;
        }
        this.props.addNewJob({
            id: '12345',
            jobTitle: this.state.jobTitle,
            salary: this.state.salary
        })
        this.setState({ // sau khi thêm thành công thì cho 2 ô rỗng 
            salary: '',
            jobTitle: ''
        })
        console.log('>>state:', this.state);
    }
    render(){
        return(
            <>
            <div>hello add component</div>
            <form>
            <label htmlFor="fname">JobTitle name:</label><br/>
            <input
            onChange={(event)=>{this.handleChangeJobTitle(event)}}
            type="text" value={this.state.jobTitle}/><br/>
            <label htmlFor="lname">salary:</label><br/>
            <input
            onChange={(event)=>{this.handleChangeSalary(event)}}
            type="text" value={this.state.salary}/><br/><br/>
            <input type="submit" value="Submit"
            onClick={(event)=>{this.handleSubmit(event)}}/>
        </form> 
            </> 
        )
    }
}
export default AddComponent