import React, {useState} from 'react';

function App() {

  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });


  function handleInput(event){
    const {name, value} = event.target;
    setForm({...form, [name]: value})
  }

 async function handleSubmit(event){
    event.preventDefault();
    const res = await fetch("http://localhost:4000/transaction",{
      method: "POST",
      body: form,
    });

    console.log(res);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter Amount" 
          name='amount'
          value={form.amount}
          onChange={handleInput}
        />

        <input type="text"onChange={handleInput} value={form.description} name='description' placeholder="Enter details"/>
        <input type="date" onChange={handleInput} value={form.date} name='date'/>
        <button type="submit" >Submit</button>
        
      </form>
    </div>
  );
}

export default App;
