
import './App.css';
import React, {useState} from 'react';



function App() {
  const [salario, setSalario] = useState('Digite seu salario')
  const [meses, setMeses] = useState('Digite a quantidade de Mês')

  return (
    <>
    <label>Digite seu salario</label>
    <input 
    value={salario} 
    onChange={(e) => setSalario(e.target.value)}/><br/>

    <label>Digite a quantidade de meses trabalhados</label>
    <input 
    value={meses} 
    onChange={(a) => setMeses(a.target.value)}/>

    <p>{((salario * 8) / 100) * meses}</p>
    </>
  )
}

export default App;
