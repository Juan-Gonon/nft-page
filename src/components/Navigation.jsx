import styled from 'styled-components'
import { Logo } from './Logo'
import { useState } from 'react'

export const Navigation = () => {
  const [click, setClick] = useState(true)

  return (
    <Section>
      <NabBar>
        <Logo />
        <Menu $clicks={click} >
          <MenuItem>
            Home
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

