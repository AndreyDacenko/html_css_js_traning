function App(props){
  const bmi = props.weight / ( (props.height / 100) ** 2 );
  return <div>
    Индекс массы тела: {bmi}
    <Book title="Книга" author="Нонейм" price="123" />
    <hr/>
   { /* На память о стрелках с любовью {dataBook.map( book => <Book title={book.title} 
   price={book.price} author={book.author} /> )} */ }
  
    {dataBook.map( function(book){
     return <Book title={book.title} 
        price={book.price} 
        author={book.author}
        id={book.id}
        key={book.id}
        />
   })}                                                  
  
    <Footer phone="+7(495)780-47-50" />
 </div>
}
