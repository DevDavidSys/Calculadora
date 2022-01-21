import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';



function App() {
  const [display,setDisplay] = useState('');
  const [n1,setNone] = useState('');
  const [n2,setNtwo] = useState('');
  const [operator, setOperator ] = useState('');
  const [stage,setStage] = useState(0);

  const teclas = ['(',')','%','AC','7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'];
  const operators = ['+','-','/','*'];
  const numbers = ['7','8','9','4','5','6','1','2','3','0']
  const calc_functions = ['(',')','AC','%','=','']

 
  
  let buttons = [];
  teclas.map(item => {
    buttons.push(<div className='button' onClick={()=>handleClick(item)} >{item}</div>);
  });

  const handleClick = async (item)=>{
    if(calc_functions.includes(item)){

      if(item == '='){
        handleSubmit();
        setDisplay('');
        setNone('');
        setNtwo('');
        setOperator('');
        setStage(0);
      }
      else if(item == 'AC'){
        setDisplay('');
        setNone('');
        setNtwo('');
        setOperator('');
        setStage(0);

      }
    }
    else if(numbers.includes(item)){
      if(stage === 0){
        setNone(n1+item);
        setDisplay(n1 + item);
      }
      if(stage === 1){
         setNtwo(n2 + item);
         setDisplay(n2 + item)
      }
    }
    
    else if(operators.includes(item)){
      setDisplay('');
      setStage(1);
      setOperator(item);
      
    }
  

    console.log(n1 +'   ' +operator + '    ' +n2 + stage)
  }

  const handleSubmit = ()=>{
    //envia os dados para o servidor
    let send = JSON.stringify({none: n1,ntwo: n2,operator});
    alert(send);
        
  }

  return (
    <div className="App">
      <form className="calculator" onSubmit={handleSubmit}>
        <div className="display">{display} </div>
        
        <div className="buttons">
          {buttons}
        </div>
      </form>
    </div>
  );

}

/*function App(){
  const [n1,setN1] = useState('');
  const [n2,setN2] = useState('');
  const [operator,setOperator] = useState('');
  const handleSubmit = (event)=>{
    event.preventDefault();
    let send = JSON.stringify({n1:n1,n2:n2,operator:operator})
    alert(send)
  }
  return(
    <form onSubmit={handleSubmit}>
      <input value={n1} onChange={(e)=>{setN1(e.target.value)}} placeholder='Numero 1'></input>
      <input value={operator} onChange={(e)=>{setOperator(e.target.value)}} placeholder='Numero 1'></input>
      <input value={n2} onChange={(e)=>{setN2(e.target.value)}} placeholder='Numero 2'></input>
      <input type='submit'/>

    </form>
  );
}*/
export default App;
