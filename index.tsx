const App:React.FC = () => {

    function showAlert(){
      alert("button is clicked");
    }
  
    function showEvent(e:React.ChangeEvent<HTMLInputElement>){
       console.log(e.target.value);
    }
  
    const str = "this is a reusable child component";
  
    return (
      <div className="">
        <div className="">10</div>
        <br/>
        <Child text={str}/>
        <br/>
        <button onClick={showAlert}>Click</button>
        <input type="text"  onChange={showEvent}/>
      </div>
    )
  }
  
  export default App
  
  interface ChildProps{
    text:string;
  }
  
  
  const Child:React.FC<ChildProps> = ({text}) => {
    return <div className="">{text}</div>
  };
  
  app.tsx