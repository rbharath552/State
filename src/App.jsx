import EmployeeContainer from "./components/EmployeeContainer";
import ProductContainer from "./components/ProductContainer";
import SkillContainer from "./components/SkillContainer";
import StudentContainer from "./components/StudentContainer";
import UserContainer from "./components/UserContainer";



function App() {
  return (
    <div>
     <UserContainer/>
      <ProductContainer/>
      <StudentContainer/>
      <SkillContainer/>
      <EmployeeContainer/>
    </div>
  );
}

export default App;