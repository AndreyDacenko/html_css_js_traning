function Book(props){
  return <div className='book'>
 <h3>{props.title}</h3>
 <img src={'http://placehold.it/100x120?text='+props.title} />
 <p>Автор: {props.author}</p>
 <p>Цена: {formatPrice(props.price)}руб.</p>
</div>
}
