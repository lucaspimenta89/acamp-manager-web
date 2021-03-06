import React from 'react'
import MaskedInput from 'react-text-mask'

const DateInput: React.FC = (props: any) => {  
  const { inputRef, ...other } = props
  return (
    <MaskedInput 
      {...other} 
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}/>
  )
}

export default DateInput