import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
const Shop = () => {
  return (
    <div>
      <h1>this is shop</h1>
    </div>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* <Route path='home' element={<Home/>}/> */}
        <Route index element={<Home />} />{" "}
        {/*index element make this the default route */}
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
