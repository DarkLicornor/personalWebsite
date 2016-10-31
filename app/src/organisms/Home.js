import React from 'react'
import Title from '../atoms/Title'
import SubTitle from '../atoms/SubTitle'
import Button from '../atoms/Button'
import SocialBar from '../molecules/SocialBar'

const Home = (props) => <div className='home'>
  <Title text={"Hi, I'm Alexa"} />
  <SubTitle text={"I'm an Application and Software Development Student based in Aberdeen (Scotland)"}/>
  <Button text={'Learn more'} link={'/about'}/>
  <SocialBar />
</div>

export default Home
