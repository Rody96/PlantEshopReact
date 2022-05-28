import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

  function checkValue(){
    if(!inputValue.includes('@')){
      alert(`Attention, il n'y a pas d'@', ceci n'est pas une adresse valide`);
    }
  }

  function handleInput(e){
    setInputValue(e.target.value)
  }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
      <input 
        type='text' 
        name='mailadress' 
        placeholder='Veuillez entrer votre adresse' 
        value={inputValue} 
        onChange={handleInput} 
        onBlur={checkValue}
      />
		</footer>
	)
}

export default Footer