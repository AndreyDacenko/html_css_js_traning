class Book extends React.Component{
    constructor(props){
        super(props);
        this.state = {selected: false};
        this.textInput = null;
        
        this.setTextInputRef = element => {
            this.textInput = element;
            this.textInput.value = '1234';
            this.textInput.style.backgroudColor = 'pink'
        }
    }
    
    componentDidMount(){
        console.log('-'.repeat,'компонент смонтирован');
    }
    
    componentWillUnmount(){
        console.log('-'.repeat(10),'компонент будет демонтирован');
    }
    
    render(){
        
        const cssClass = this.state.selected ? 'book-selected' : 'book-default'
        
  return <div className='book'>
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
