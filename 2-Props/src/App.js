import User from "./components/User";
import User1 from "./components/User1";
import User2 from "./components/User2";

const user = {
  name: "Büşra",
  surname: "Kaya",
  age: 21,
  city: "Ankara"
};

function App() {
  return (
    <div>
      {/* 
        <User name = {"Büşra"} surname = "Kaya" age= {21} city= "Ankara" />
        <User name = {"Ömer"} surname = "Şahin" age= {20} city= "Aydın" />
        <User name = {"Osman Can"} surname = "Ceylan" age= {22} city= "Konya" />
        <User name = {"Şaziye"} surname = "Dağ" age= {20} city= "Konya" />
      */}
      <User data = {user} />
      <User1 data = {user} friends = {["Betül","Aybüke","Saliha"]}/>
      <User1 
        data = {{
          name: "Büşra",
          surname: "Kaya",
          age: 21,
          city: "Ankara"
        }} 
        friends = {["Betül","Aybüke","Saliha"]}
      />
      <User2
/*      name = "Büşra"
        surname = "Kaya"
        age = {21}
        city = "Ankara" */

       //title="Başlık"
        data = {{
          name: "Büşra",
          surname: "Kaya",
          age: 21,
          city: "Ankara"
        }}  
        friends = {["Betül","Aybüke","Saliha"]}
      />
    </div> 
  );
}

export default App;
