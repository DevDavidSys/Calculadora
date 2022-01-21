import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import styled from 'styled-components';



const StyledButton = styled.div`
  border: 1px solid #fdff70;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover { 
    background-color:rgba(253, 255, 112,0.3)
  }`;

  const Button = (props)=>{
    
    return(
      <StyledButton  item={props.con} >{props.con}</StyledButton>
    );
  }




function App() {
  const [display,setDisplay] = useState("");
  const [n1,setNone] = useState('');
  const [n2,setNtwo] = useState('');
  const [operator,  ] = useState('');
  let stage = 1;

  const teclas = ['(',')','%','AC','7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'];
  const operators = ['+','-','/','*'];
  const numbers = ['7','8','9','4','5','6','1','2','3','0']
  const calc_functions = ['(',')','AC','%','=','']

  function handleClick(item){
    if(calc_functions.includes(item)){
      if(item == '='){
        alert(`${n1},${operator},${n2}`);
        setNone('');
        setNtwo('');
        setOperator('');
        setDisplay('');
      }
    }
    else if(stage == 1){
      if(numbers.includes(item)){
        if(operators.includes(display)){
          setDisplay(item);
        }
        else{
        setDisplay(display+item)
        console.log(display)
        }
      }
      else if(operators.includes(item)){
        setDisplay(item);
        setOperator(item);
      }
      
    }
     /* if(item == 'AC'){
        setDisplay('');
        setOperator('');
        setN1('');
        setN2('');
        stage = 1;
      }
    }
    else if(item == '='){
      alert(`${n1} ${operator} ${n2}`);
      stage = 2;

    }*/
  }
  
  let buttons = [];
  teclas.map(item => {
    buttons.push(<button className='button' onClick={()=>handleClick(item)}>{item}</button>);
  });



  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{display} </div>
        
        <div className="buttons">
          {buttons}
        </div>
      </div>
    </div>
  );

}
export default App;
