import './App.css';
import {useState} from 'react';

function App() {
  const [value,setavalue] = useState('');
  const solution = ()=>{
    if(value.at(-1) === "%"){
        setavalue((value.slice(0,-1)/100).toString())
    }
    else if(value.includes("%") && value.at(-1) != "%"){
      setavalue(eval(value.replaceAll("%", "*0.01*")))
    }

    else{
      setavalue(eval(value).toString());
    }


  }

  return (
    <>
    <div className="container">
      <div className="calculator">
      <form action=''>
        <div className="display">
          <input type='text' value={value}/>
        </div>
        <div>
          <input type="button" value="AC" className='special' onClick={()=>{setavalue('')}} />
          <input type="button" value="DEL" className='special' onClick={(e)=>{setavalue(value.slice(0,-1 ))}}/>
          <input type="button" value="+/-" className='special' onClick={(e)=>{setavalue("(" + "-" +value+")")}}/>
          <input type="button" value="/" className="special" onClick={(e)=>{setavalue(value+e.target.value)}}/>
        </div>
        <div>
          <input type="button" value="7" onClick={(e)=>{setavalue(value+e.target.value)}} onKeyDown={()=>{setavalue('')}}/>
          <input type="button" value="8" onClick={(e)=>{setavalue(value+e.target.value)}}/>
          <input type="button" value="9" onClick={(e)=>{setavalue(value+e.target.value)}}/>
          <input type="button" value="*" className="special" onClick={(e)=>{setavalue(value+e.target.value)}}/>
        </div>
        <div>
          <input type="button" value="4" onClick={(e)=>{setavalue(value+e.target.value)}}
          onKeyDown={(e)=>{setavalue(value+e.target.value)}}/>
          <input type="button" value="5" onClick={(e)=>{setavalue(value+e.target.value)}}/>
          <input type="button" value="6" onClick={(e)=>{setavalue(value+e.target.value)}}/>
          <input type="button" value="-" className="special" onClick={(e)=>{setavalue(value+e.target.value)}}/>
        </div>
        <div>
          <input type="button" value="1" onClick={(e)=>{setavalue(value+e.target.value)}}/>
          <input type="button" value="2" onClick={(e)=>{setavalue(value+e.target.value)}}/>
          <input type="button" value="3" onClick={(e)=>{setavalue(value+e.target.value)}}/>
          <input type="button" value="+" className="special" onClick={(e)=>{setavalue(value+e.target.value)}}/>
        </div>
        <div>
          <input type="button" value="%" onClick={(e)=>{setavalue(value+e.target.value)}}/>
          <input type="button" value="0" onClick={(e)=>{setavalue(value+e.target.value)}}/>
          <input type="button" value="." onClick={(e)=>{setavalue(value+e.target.value)}}/>
          <input type="button" value="=" className="special" onClick={()=>{solution()}}/>
        </div>
      </form>

      </div>
    </div>
    </>
  );
}

export default App;
