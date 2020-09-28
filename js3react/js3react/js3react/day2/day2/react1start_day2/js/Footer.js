function Footer(props){
  const phone = props.phone;
  return <footer>
    <a href={'tel:'+phone}>
      Телефон:{phone} 
    </a>
  </footer>
}