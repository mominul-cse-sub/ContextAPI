import react from "react";

class Counter extends react.Component{
    state = {
        count: 0,
    };

    incrementCount = () =>{
        this.setState((preState) => ({count: preState.count+1}));
    }


    render(){
        // const {render} = this.props;
        const {children} = this.props;
        const {count} = this.state;
        return(
            children(count, this.incrementCount)
        );
    }
}

export default Counter;