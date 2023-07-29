import react from 'react';

const withCounter = (OrginalComponent) => {
    class NewComponent extends react.Component{
        state = {
            count: 0,
        };
    
        incrementCount = () =>{
            this.setState((preState) => ({count: preState.count+1}));
        }

        render(){
            const {count} = this.state;
            return <OrginalComponent count={count} incrementCount= {this.incrementCount}/>
        }
    }
    return NewComponent;
}

export default withCounter;