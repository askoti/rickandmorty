import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CharactersProvider } from './context/CharactersContext'
import { EpisodesProvider } from './context/EpisodesContext'
import { LocationsProvider } from './context/LocationsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CharactersProvider>
    <EpisodesProvider>
      <LocationsProvider>
          <App />
      </LocationsProvider>
    </EpisodesProvider>
  </CharactersProvider>
)
