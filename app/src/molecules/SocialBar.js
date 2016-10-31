import React from 'react'
import SocialButton from '../atoms/SocialButton'
import facebook from '../style/images/facebook.svg'
import twitter from '../style/images/twitter.svg'
import linkedin from '../style/images/linkedin.svg'
import github from '../style/images/github.svg'

const SocialBar = (props) => <ul className='socialBar'>
  <SocialButton image={facebook} link={"https://www.facebook.com/madre.noel"} alt={'facebook'}/>
  <SocialButton image={twitter} link={"https://twitter.com/Alexa_Noel"} alt={'twitter'}/>
  <SocialButton image={linkedin} link={"https://www.linkedin.com/in/alexa-n-86ab2a93?trk=hp-identity-photo"} alt={'linkedin'}/>
  <SocialButton image={github} link={"https://github.com/DarkLicornor"} alt={'github'}/>
</ul>

export default SocialBar
