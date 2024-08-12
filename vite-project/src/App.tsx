// import ListGroup from "./component/ListGroup";
// import Message from "./message";
// function App() {
//   let items = ["A", "B", "C"];
//   const HandleSelecteItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Obj"
//         onSelecteItem={HandleSelecteItem}
//       />
//     </div>
//   );
// }

import Button from "./component/Button";
// export default App;

const App = () => {
  return (
    <Button
      onClick={() => {
        alert("別暈了！");
      }}
    >
      我愛胡德❤️
    </Button>
  );
};

export default App;
