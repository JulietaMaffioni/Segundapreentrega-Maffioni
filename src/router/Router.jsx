import NavBar from '../components/navBar/NavBar';
import ItemContainer from '../components/ItemListContainer/ItemContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';


 function Router () {
    return (
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemContainer />} />
            <Route path='/category/:id' element={<ItemContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      );
}

export default Router;