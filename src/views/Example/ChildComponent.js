import React from "react";

class ChildComponent extends React.Component{
    /*
    JSX => return block (block có thể là 1 khối <div></div>, <span></span>,...(trả về 1 phần tử của HTML))
    */
    state = {
        showJobs: false,
    }
    handleShowHide = (event) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render(){
        console.log('>>render', this.props);
        let {name, age, arrJobs} = this.props;
        let {showJobs} = this.state;
        return (
            <>
            <div>Child Component name: {name} - age child component: {age}</div>
            {showJobs === false ? <div><button onClick={(event)=>{
                this.handleShowHide(event);
            }}>Show</button></div>
            : <>
                <div><button onClick={(event)=>{
                    this.handleShowHide(event);
            }}>Hide</button></div>
                <div className="job-list"> 
                    <div>
                        {
                        arrJobs.map((item,index)=>{
                            return (<div key={item.id}>
                                {item.jobTitle} - {item.salary}
                            </div>)
                        })
                        }
                    </div>
                </div>
            </>}
            </>
        );

    }
}

export default ChildComponent;