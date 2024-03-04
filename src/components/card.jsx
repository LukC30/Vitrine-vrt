import axios from "axios";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export default function CardItens() {
    const [users, setUsers] = useState({})
    
    useEffect(()=>{
        getProduct()
    }, []);

    function getProduct() {
        axios.get('http://localhost/backend/Api.php').then(function(response){
            console.log(response.data);
            setUsers(response.data)
        })
    }
    return(
   {   
    users.map((produto)=>(

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>oi</Card.Title>
        <Card.Text>
          oi
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    ))
    }
)}