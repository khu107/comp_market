import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import data from './data';
import { useState } from 'react';
import Card from './component/Card';
import Detail from './routes/Detail';
import About from './routes/About';

import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((e, i) => {
                    return <Card key={i} shoes={shoes[i]} />;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>memeber</div>} />
          <Route path="location" element={<div>Location</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
