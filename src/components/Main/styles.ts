import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: var(--dark);
  color: var(--white);
  width: 100%;
  height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: min(48rem, 100%);
  margin-bottom: 4rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`
