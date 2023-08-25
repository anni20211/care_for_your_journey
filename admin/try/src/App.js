import React, { useContext } from 'react';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext.js';
import { DarkModeContext } from './context/darkModeContext.js';
import { hotelColumns, roomColumns, userColumns } from './datatablesource.js';
import { productInputs, userInputs } from './FormSource.js';
import Home from './pages/home/Home.jsx';
import List from './pages/list/List.jsx';
import Login from './pages/login/Login.jsx';
import New from './pages/new/New.jsx';
import NewHotel from './pages/newHotel/newHotel.jsx';
import NewRoom from './pages/newRoom/newRoom.jsx';
import Single from './pages/single/Single.jsx';
import "./style/dark.scss";
const App = () => {
    const {darkMode}=useContext(DarkModeContext);
    const ProtectedRoute=({children})=>{
      const {user}=useContext(AuthContext);
      if(!user){
        return <Navigate to ="/login"/>
      }
      
        return children;
    }
  return (
    <div className={darkMode ?  "app dark" :"App" }>
     <BrowserRouter>
      <Routes>
      <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={
            <ProtectedRoute>
               <Home/>
            </ProtectedRoute>
            }/>
            <Route path="users">
              <Route index element={
              <ProtectedRoute>
                <List columns={userColumns}/>
              </ProtectedRoute>
              } />
              <Route path=":userId" element={
                <ProtectedRoute>
                <Single />
                </ProtectedRoute>
              } />
              <Route path="new" element={
                <ProtectedRoute>
                 <New inputs={userInputs}  title="Add new User"/>
                </ProtectedRoute>
              }
              />
            </Route>
            <Route path="hotels">
              <Route index element={
                <ProtectedRoute>
                 <List columns={hotelColumns} />
                </ProtectedRoute>
              } />
              <Route path=":productId" element={
                <ProtectedRoute>
                <Single />
                </ProtectedRoute>
              
              } />
              <Route path="new" element={
                <ProtectedRoute>
                <NewHotel/>
                </ProtectedRoute>
              
              }
              />
            </Route>
            <Route path="rooms">
              <Route index element={
                <ProtectedRoute>
                 <List columns={roomColumns} />
                </ProtectedRoute>
              } />
              <Route path=":productId" element={
                <ProtectedRoute>
                <Single />
                </ProtectedRoute>
              
              } />
              <Route path="new" element={
                <ProtectedRoute>
                <NewRoom/>
                </ProtectedRoute>
              
              }
              />
            </Route>

            
          </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;

