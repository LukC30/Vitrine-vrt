import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mt from '../MT.png'
import Carrinho from './carrinho.jsx';

function NavScrollExample() {


  return (
    <Navbar variant="dark" expand="lg" className="bg-dark" style={{backgroundColor:"black"}}>
      <Container fluid>
        <Navbar.Brand href="/"><img src={mt} style={{width:"100px", height:"auto"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:"#fff"}}>Produtos</Nav.Link>
            <NavDropdown variant="dark" title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Item 2 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Item 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisa"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="primary" className='me-3'>Buscar</Button>
          <button><Carrinho/></button>
          
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;