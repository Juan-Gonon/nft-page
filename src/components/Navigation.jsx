import styled from 'styled-components'
import { Logo } from './Logo'
import { useState } from 'react'

export const Navigation = () => {
  const [click, setClick] = useState(false)

  const scrollTo = (id) => {
    let element = document.getElementById(id)
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })

    setClick(!click)
  }

  return (
    <Section id='navigate'>
      <NabBar>
        <Logo />
        <HamburgerMenu $clicks={click} onClick={() => setClick(!click)} />
        <Menu $clicks={click} >
          <MenuItem onClick={() => scrollTo('home')} >
            Home
          </MenuItem>
          <MenuItem onClick={() => scrollTo('about')} >
            Acerca de
          </MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')} >
            RoadMap
          </MenuItem>
          <MenuItem onClick={() => scrollTo('cards')} >
            Cards
          </MenuItem>
          <MenuItem onClick={() => scrollTo('team')} >
            Team
          </MenuItem>
        </Menu>
      </NabBar>
    </Section>
  )
}

const Section = styled.section`
  width: 100vw;
  background-color: ${({theme}) => theme.body};
`

const NabBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${({theme}) => theme.navHeight};
  margin: 0 auto;

`

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 64em) {
    position: fixed;
    top: ${({theme}) => theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    z-index: 100;
    background-color: ${({theme}) => `rgba(${theme.bodyRgba}, 0.85)`};
    backdrop-filter : blur(2px);
    transform : ${(props) => props.$clicks ? 'translateY(0)' : 'translateY(1000%)'};
    transition : all .3s  ease;
    flex-direction : column;
    justify-content : center;
    touch-action : none;

  }
`

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${({theme}) => theme.text};
  cursor: pointer;
  font-size: ${({theme}) => theme.fontlg};

  &::after{
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${({theme}) => theme.text};
    transition: width .3s ease;
  }
  &:hover{
      &::after{
        width: 100%;
      }
    }

    @media screen and (max-width: 64em) {
      margin: 1rem 0;
      font-size: ${({theme}) => theme.fontmd};

      &::after{
        display: none;
      }

    }

`

const HamburgerMenu = styled.span`
  width: ${({$clicks}) => $clicks ? '2rem' : '1.5rem'};
  height: 2px;
  background: ${({theme}) => theme.text};
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: ${({$clicks}) => $clicks ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .3s ease;

  @media screen and (max-width: 64em){
    display: flex;
  }

  &::after, &::before{
    content: "";
    width: ${({$clicks}) => $clicks ? '1rem' : '1.5rem'};
    height: 2px;
    right: ${({$clicks}) => $clicks ? '-2px' : '0'};
    background: ${({theme}) => theme.text};
    position: absolute;
    transition: all .3s ease;
  }

  &::after{
    top: ${({$clicks}) => $clicks ? '0.3rem' : '0.5rem'};
    transform: ${({$clicks}) => $clicks ? 'rotate(-40deg)' : 'rotate(0)'};
  }

  &::before{
    bottom: ${({$clicks}) => $clicks ? '.3rem' : '.5rem'};
    transform: ${({$clicks}) => $clicks ? 'rotate(40deg)' : 'rotate(0)'};
  }

`

