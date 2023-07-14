import { useState } from 'react'
import './App.css'


function App() {
  // creo le 2 variabili di stato che mi faranno riaggiormare la pagina

  const [marioVoto, setMAriovoto] = useState(3)
  const [luigiVoto, setLuigivoto] = useState(3)
  

  //creo le funzini con cui mi prenderò i valori degli input gli aggiungo parseInt per evitare spazi e avere sempre numeri interi

const iptValueMArio =(e) =>{
  setMAriovoto(parseInt(e.target.value))
}  
const iptValueLuigi =(e) =>{
  setLuigivoto(parseInt(e.target.value))
}  

//condizioni per lo studente che è in vantaggio

let message = ""
if (marioVoto > luigiVoto) {
    message= "Mario rossi è in vantaggio"
}
else if (marioVoto < luigiVoto) {
  message="luigi verdi è in vantaggio"
}
else{
  message="mario rossi e luigi verdi sono pari"
}

//RETURN
  return (
    <>
      <div className='flex justify-center items-center gap-4'>
       
        <label htmlFor="iptMario">Voti Mario</label>
        <input 
        type="range" 
        className='bg-blue-400 p-2 text-center font-bold' 
        name ="iptMario" 
        onChange={iptValueMArio} 
        maxLength={2}
         min={0} 
         max={10} 
        value={marioVoto}
        />
        <span>{marioVoto}</span>
        
        <label htmlFor="iptLuigi">voti Luigi</label>
        <input
        type="range"
        className='bg-blue-400 p-2 text-center font-bold' 
        name ="iptLuigi" 
        onChange={iptValueLuigi} 
        maxLength={2} 
        min={0} 
        max={10} 
        value ={luigiVoto}
        />
        <span>{luigiVoto}</span>
      </div>

      <div className='mt-10 font-extrabold text-lg'>
        <div>
          {message}
        </div>
      </div>
    </>
  )
}

export default App
