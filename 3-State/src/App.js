import Form2 from "./components/Form2";

/*
State: Componentlerimiz üzerinde değişme potansiyeli olan bütün verileri tutan javascript objesidir. 
Componentlerimizin değerlerini manipüle etmemizi sağlar.
Herhangi bir state güncellendiği anda return render işlemi baştan yapılır.
*/

function App() {
  return (
    <div>
      {/* <Counter/> */}    
      {/* <User/> */}
      {/* <Colors/> */}
      {/* <Form/> */}
      <Form2/> 
    </div>
  );
}

export default App;
