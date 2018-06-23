import styled from 'styled-components'
import { number, bool } from 'prop-types'

export const sidePaddingSmaller = 16
const sidePadding = 20
const space = 8

export const Wrapper = styled.div`
  min-width: ${p => p.minWidth || 180}px;
  background: white;
  box-shadow: 0 0 0 1px ${p => p.theme.grayLight1},
    0 6px 16px rgba(0, 0, 0, 0.06);
  border-radius: ${p => p.theme.radiusSmall}px;

  padding-bottom: ${space}px;
  padding-top: ${space}px;

  z-index: ${p => p.theme.ZIndexPopovers};
`

Wrapper.propTypes = {
  minWidth: number,
}

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background: ${p => p.theme.grayLight1};

  margin-top: ${space}px;
  margin-bottom: ${space}px;
`

export const GroupTitle = styled.div`
  font-size: ${p => p.theme.fontTiny115}px;
  font-weight: 600;
  letter-spacing: 0.8px;
  line-height: 1;
  text-transform: uppercase;
  color: ${p => p.theme.grayDark2};
  user-select: none;

  margin-top: 6px;
  margin-bottom: 4px;
  padding-left: ${p => (p.wide ? sidePaddingSmaller : sidePadding)}px;
`

GroupTitle.propTypes = {
  wide: bool,
}

export const Item = styled.div`
  height: 36px;
  line-height: 36px;
  padding-left: ${sidePadding}px;
  padding-right: 4px;
  display: block;
  width: 100%;

  font-size: ${p => p.theme.fontMedium15}px;
  font-family: 'Poppins';
  text-align: left;
  text-decoration: none;

  cursor: pointer;
  background: none;
  color: ${p => p.theme.grayDark1};
  transition: color 180ms ease, background 180ms ease;

  &:hover,
  &:focus {
    background: ${p => p.theme.grayLight2};
    color: black;
    outline: none;
  }

  &:active {
    background: ${p => p.theme.grayLight1};
  }
`

export const LinkItem = Item.withComponent('a')
export const ButtonItem = styled(Item.withComponent('button'))`
  border: none;
  outline: none;
`
