import React, {useState} from 'react'
import {Button} from '../../components/ButtonElement'
import { ArrowFoward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
    const [hover,  setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Made Easy
                </HeroH1>
                <HeroP>
                    Sign up for a new account today and 
                    receive $250 in redit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        primary='true'
                        dark='true'
                        to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Get started {hover ? <ArrowFoward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
