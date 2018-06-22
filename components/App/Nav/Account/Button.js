import styled, { css } from 'styled-components'

// Local
import DoubleArrows from '../../../../vectors/DoubleArrows'

const Button = ({ firstName, photoUrl, active, onClick }) => (
  <Wrapper onClick={onClick} active={active}>
    <Arrow>
      <DoubleArrows />
    </Arrow>
    <Text>{firstName}</Text>
    <Photo src={photoUrl} />
  </Wrapper>
)

export default Button

// Variables
const innerHeight = 34
const padding = 3
const height = innerHeight + padding * 2

// Styles
const Text = styled.div`
  margin-right: 14px;

  line-height: 1;
  font-size: 16px;
  color: currentColor;
  transition: color 180ms ease;
`

const Photo = styled.img`
  height: ${innerHeight}px;
  width: ${innerHeight}px;

  border-radius: ${p => p.theme.radius}px;
  transition: filter 180ms ease;
`

const Arrow = styled.div`
  /* For some reason align stretch doesn't fill entire height in a button */
  align-self: stretch;
  height: ${height}px;
  margin-right: 4px;
  padding: 0 7px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top-left-radius: ${p => p.theme.radiusSmall}px;
  border-bottom-left-radius: ${p => p.theme.radiusSmall}px;
  transition: background 180ms 30ms ease;

  svg {
    fill: ${p => p.theme.grayDark2};
    opacity: 0.5;
    transition: opacity 180ms ease;
  }

  &&&&&&:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`

const Wrapper = styled.button`
  height: ${height}px;
  padding-right: ${padding}px;
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 0;

  display: flex;
  align-items: center;

  font-family: 'Poppins';
  font-size: 16px;
  line-height: 1;

  cursor: pointer;
  border: none;
  background: transparent;
  border-radius: ${p => p.theme.radiusSmall}px;
  color: ${p => p.theme.grayDark2};
  transition: box-shadow 180ms ease;

  &:focus,
  &:hover {
    box-shadow: 0 0 0 1px ${p => p.theme.grayLight1};
    outline: none;
    color: black;

    svg {
      opacity: 1;
    }

    ${Arrow} {
      background: rgba(0, 0, 0, 0.02);
    }

    ${Photo} {
      filter: brightness(1.05) contrast(1.01);
    }
  }

  ${p =>
    p.active &&
    css`
      && {
        box-shadow: 0 0 0 1px ${p => p.theme.grayDark1};
        color: black;

        svg {
          opacity: 1;
        }

        ${Arrow} {
          background: rgba(0, 0, 0, 0.03);
        }
      }
    `};
`
