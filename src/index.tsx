import './index.css';
import {state} from "./Redux/state";
import {rerenderEntireThree} from "./Render/rerender";


// //создадим файлик render tsx.
// // внутри будет функция rerenderEntireThree которая будет отрисоывать все что ниже ,
// // внутри в параметрах принимает state.
//
//
// ReactDOM.render(<App state={state} addMessage={addMessage}/>, document.getElementById('root'));

rerenderEntireThree(state);