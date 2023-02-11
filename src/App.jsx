import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Hero, Characters, Locations, Episodes} from './pages/index'
import {SingleCharacter, SingleLocation, SingleEpisode, Navbar, Sidebar, Footer} from './components/index'
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material'

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
