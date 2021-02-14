// import React, {useState, useEffect} from "react";
// // import Divider from "@material-ui/core/Divider";
// import {questionsRef} from "../firebase";
// function Questions() {
//   const [todos,setTodos]  = useState<any>([]);
//   useEffect(() => {
//     questionsRef.on('value', (snapshot) => {
//       let items = snapshot.val();
//       let newState = [];
//       for (let item in items) {
//         newState.push({
//           id: item,
//           task: items[item].task,
//           done: items[item].done
//         });
//       }
//       setTodos(newState)
//     });
//   },[])
//   return (
//     <>
//       {todos.map((todo: any, i: number) => (
//         <React.Fragment key={todo.id}>
//           <Todo  todo={todo} />
//           {i<todos.length -1}
//         </React.Fragment>
//       ))}
//     </>
//   );
// }
// export default Questions;