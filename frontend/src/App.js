import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import api from './services/api/axios';


function App() {
  const [display,setDisplay] = useState('');
  
  const [expression, setExpression ] = useState('');
  const [operation, setOperation] = useState('');
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
        setExpression('');
        setStage(0);
      }
      else if(item == 'AC'){
        setDisplay('');
        setExpression('');
        setStage(0);

      }
      else if(item == '(' || item == ')'){
        setDisplay(display + item);
        setExpression(expression + item)
      }
    }
    else if(numbers.includes(item)){
      if(stage === 0){
        setDisplay(item);
        setExpression(expression + item)
      }
      if(stage === 1){
      }
    }
    
    else if(operators.includes(item)){
      setExpression(expression +' '+ item+ ' ');
      
    }
  

  }

    async function handleSubmit (){
      //envia os dados para o servidor
      try{
        let send = JSON.stringify({expression: expression,auth:1});
        let options = {'Content-Type': 'application/json'}
        alert(send);
      
        await api.post('test',send,{headers:{'Content-Type': 'application/json'}}).then(res=>{if(res){alert('Dados enviados com sucesso')}})
      }
      catch(e){
        alert('Erro ao cadastrar')
      }
          
    }

  return (
    <div className="App">
      <form className="calculator" onSubmit={handleSubmit}>
        <div className="display">{expression} </div>
        
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
