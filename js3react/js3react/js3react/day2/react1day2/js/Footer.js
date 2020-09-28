//function Footer(props){
//  const phone = props.phone;
//  return <footer>
//    <a href={'tel:'+phone}>
//      Телефон:{phone} 
//    </a>
//  </footer>
//}
//
//Footer.defaultProps = {
//  phone: 'нет'
//}
//Footer.propTypes = {
//  phone: PropTypes.string
//};

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state = {isNight: false};
    
    this.setState({isNight: true});
  }
  render(){
    const phone = this.props.phone;
    return <footer>
      
      {this.state.isNight ? 'Ночь':'День'}
      
      <a href={'tel:'+phone}>
        Телефон:{phone} 
      </a>
    </footer>
  }
}











