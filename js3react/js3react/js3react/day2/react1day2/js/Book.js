class Book extends React.Component{
  constructor(props){
    super(props);
    this.state = {selected: false};
    this.textInput = null;//готовлю ссылку на реальный DOM-элемент
    
    //связываю свойство с реальным элементом, в котором есть ref
    this.setTextInputRef = element => {
      this.textInput = element;
      this.textInput.value = '123';
      //this.textInput.style = 'background: pink'
      this.textInput.style.backgroundColor= 'pink'
    }
  }  
  
  //Мы уже в DOM-дереве
  componentDidMount(){
    console.log('----------','компонент смонтирован');
  }
  componentWillUnmount(){
    console.log('----------','компонент будет демонтирован');
  }  
  
  render(){
  
  const cssClass = this.state.selected ? 'book-selected' : 'book-default'
 
  return <div className={'book '+cssClass} >
 <h3>{this.props.title}</h3>
  <input type="text" ref={this.setTextInputRef} />
 <img src={'http://placehold.it/100x120?text='+this.props.title} />
 <p>Автор: {this.props.author}</p>
 <p>Цена: {formatPrice(this.props.price)}руб.</p>
  <a href="#">Сравнить </a>
  <a href="#">В корзину </a>
</div>
  }
}
