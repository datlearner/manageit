import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from "./Users";
import { CreateUser } from "./CreateUser";
import { UpdateUser } from "./UpdateUser";
import { Try } from "./Try";

function App() {

  return (
    <>
    <div className="body">
    <BrowserRouter>
    <Try />
    <Routes>
      <Route path="/" element = {<Users />}></Route>
      <Route path="/create" element = {<CreateUser />}></Route>
      <Route path="/update/:id" element = {<UpdateUser />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
