import {RecipeProvider} from './context/RecipeContext'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './component/Header'
import Searchpage from './pages/Searchpage'
import RecipeDetail  from './pages/RecipeDetail'
import Favoritepage from './pages/Favoritepage'



function App() {
  
return (
    <div>
      < RecipeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Searchpage />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
          <Route path='/Favorites' element={<Favoritepage/>} />
        </Routes>
      </Router>
      </RecipeProvider>
    </div>
  )
}

export default App
