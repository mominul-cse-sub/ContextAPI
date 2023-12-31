import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../contexts/ThemeContext";
import { useContext } from "react";

function Content (){
    const context = useContext(ThemeContext);
    const {theme,switchTheme} = context;
    return(
        <div>
            <h1>This is a Content.</h1>
            <Counter>
                {(count,incrementCount)=> <HoverCounter count={count} 
                                                                incrementCount ={incrementCount} 
                                                                theme = {theme} 
                                                                switchTheme = {switchTheme}
                                            /> }
            </Counter>
        </div>
    )
}

export default Content;


// export default class Content extends React.Component{
//     // componentDidMount(){
//     //     console.log(this.context);
//     // }
//     render(){
//         const {theme, switchTheme} = this.context;
//         return(
//             <div>
//                 <h1>This is a Content.</h1>
//                 <Counter>
//                     {(count,incrementCount)=>(
//                                                 <HoverCounter count={count} 
//                                                             incrementCount ={incrementCount} 
//                                                             theme = {theme} 
//                                                             switchTheme = {switchTheme}
//                                                 />
//                                             )
//                     }
//                 </Counter>
//             </div>
//         )
//     }
// }

// Content.contextType = ThemeContext;