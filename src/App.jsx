import React, { useState } from 'react';
import Navbar from './assets/components/Navbar';
import Input from './assets/components/UI/input';
import Table from './assets/components/UI/table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("")
  const [data, setdata] = useState([

  ]);
  const check = {
    user: userName.trim().length === 0,
    age: age.trim().length === 0
  }
  function addUser() {
    const newUser = {
      id: 1,
      isName: userName,
      age: `${age}`
    };



    if (check.user || check.age) {
      toast.error("Please fill in the input")
    } else {
      setdata([...data, newUser])
      toast.success("Completed")
    }
    setUserName("");
    setAge("")
  }


  function deltuser(i) {
    let newarr = data.filter((item) => {
      return item.id !== i
    })
    setdata(newarr)
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card w-75 mx-auto shadow p-5">
                <div className="form-outline">
                  <Input type={"text"} placeholder={"Bajarmoqchi bo'lgan ishingiz"} val={userName} setVal={setUserName} />
                  <Input type={"number"} placeholder={"Nechchi daqiqadan keyin"} val={age} setVal={setAge} />
                  <div className='w-50 mx-auto'>
                    <button className="btn btn-primary w-100" onClick={() => addUser()}>
                      ADD INFO
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 my-5 bg-light p-5 w-75 mx-auto">
              <h3 className="text-center text-danger">USER LIST</h3>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th><th>Name</th><th>Qachon kiritildi</th><th>Qancha daqiqadan keyin</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((item, index) => {
                      return <Table  num={index + 1} data={item} del = {deltuser}/>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </>
  );

};

export default App;