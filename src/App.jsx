import { BrowserRouter } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
export default App