import React from 'react'

const SocialButton = (props) => <a href={props.link}>
  <img
  className='socialButton'
  alt={props.alt}
  src={props.image} />
</a>

export default SocialButton
