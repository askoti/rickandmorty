import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Characters from './pages/Characters'
import Locations from './pages/Locations'
import Episodes from './pages/Episodes'
import SingleCharacter from './components/SingleCharacter'
import SingleLocation from './components/SingleLocation'
import SingleEpisode from './components/SingleEpisode'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import Sidebar from './components/Sidebar'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff'
    }
  },
});


function App() {
  const matches = useMediaQuery('(min-width:700px)');

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div className="App">
          {matches ? <Navbar /> : <Sidebar />}
          <Routes>
              <Route exact path='/' element={<Hero />} />
              <Route exact path='/characters' element={<Characters />} />
              <Route exact path='/characters/:id' element={<SingleCharacter />} />
              <Route exact path='/locations' element={<Locations />} />
              <Route exact path='/locations/:id' element={<SingleLocation />} />
              <Route exact path='/episodes' element={<Episodes />} />
              <Route exact path='/episodes/:id' element={<SingleEpisode />}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
