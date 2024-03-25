import React from "react";

class MyComponent extends React.Component{

    /*
    JSX => return block (block có thể là 1 khối <div></div>, <span></span>,...(trả về 1 phần tử của HTML))

    */

    state = {
        name: 'KITE',
        channel: 'Đào Tuấn Kiệt'
    }
    handleOnChangeName = (event)=>{
        this.setState({
            name: event.target.value
        })
    }
    render(){

        return (
            <> {/*fragment*/}
                <div className="first">
                {/* {console.log('My name is:', name)} */}
                <input value={this.state.name} type="tetx" 
                onChange={(event)=>{
                    this.handleOnChangeName(event);
                }}></input>
                    Hello my component, my name is {this.state.name}
                </div>
                <div className="second">
                    My youtube channel : {this.state.channel}
                </div>
            </>
        );

    }
}
export default MyComponent;