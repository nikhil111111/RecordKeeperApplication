import "./App.css";
import Header from "./components/Header";
// for below line we use mui.com we had installed the packages
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
// styling part finishes -> state part starts
import { useState } from "react";
import Fields from "./components/Fields";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data,setData] = useState([]);

  const addData = () => {
    setData([...data, {name,email}]);
    // ...data is spread operator
    setName("");
    setEmail("");
    // setNme aur setEmail ko phir se nya bnadiya h
  }

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          {/* below line is copied from mui.com : go to last of website then component then textfield then expand code */}
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} color="error" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>


    {/* Data */}
    <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {/* mappping */}
        {
          data.map((element,index) => {
            return (
              <Fields key={index} name={element.name} email={element.email} index={index} />
            )
          }) 
        }
      </div>
    </div>
  );
}

export default App;
