function App(props){
  const bmi = props.weight / ( (props.height / 100) ** 2 );
  return <div>
    Индекс массы тела: {bmi}
    <Book title="Книга" author="Нонейм" price="123" />
    <hr/>
    {books}
 </div>
}
