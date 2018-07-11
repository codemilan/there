import styled from 'styled-components'

// Local
import { Container } from '../shared/Container'
import Select from '../shared/Select'

const SubNav = () => (
  <Wrapper>
    <Container>
      <Select />
    </Container>
  </Wrapper>
)

export default SubNav

// Styles
const Wrapper = styled.nav`
  padding: 4px 0;
`
