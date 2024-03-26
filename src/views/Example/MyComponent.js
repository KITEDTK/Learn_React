import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component{

    /*
    JSX => return block (block có thể là 1 khối <div></div>, <span></span>,...(trả về 1 phần tử của HTML))
    props dữ liệu được trả về từ thằng cha xuống thằng con nhưng không thể từ thằng con trả về thằng cha được
    */

    state={
        arrJobs:[
            {
                id: 'job', jobTitle: 'developer', salary:500
            },
            {
                id: 'job2', jobTitle: 'tester', salary:1000
            },
            {
                id: 'job3', jobTitle: 'gamer', salary:450
            }
        ]
    }
    addNewJob = (job) => {
        this.setState({
            arrJobs : [...this.state.arrJobs, job] //spread sau đó thêm job vào array 
        })
        
    }
    render(){
        //console.log('>>render', this.state);
        return (
            <> 
            <AddComponent addNewJob={this.addNewJob}/>
            <ChildComponent arrJobs={this.state.arrJobs}/>
            </>
            
        );

    }
}
export default MyComponent;