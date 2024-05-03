import { useTheme } from './contexts/ThemeProvider';
import Home from './pages/Home'
function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
    <Home/>
    </>
  )
}

export default App
