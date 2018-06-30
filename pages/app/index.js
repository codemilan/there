import { Space } from '../../components/shared/Space'
import Nav from '../../components/App/Nav'
import Map from '../../components/App/Map'
import SubNav from '../../components/App/SubNav'

const App = () => (
  <div>
    <Nav />
    <SubNav />
    <Space height={20} />
    <Map />
  </div>
)

export default App
