import axios from "axios";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export default function CardItens() {
    //const [products, setProducts] = useState({});

    useEffect(() => {
        getProduct();
    }, []);

    function getProduct() {
        axios.get('http://localhost/backend/Api.php').then(function (response) {
            console.log(response.data);
            //setProducts(response.data)
        });
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>Produto</Card.Title>
                        <Card.Text>
                           tipo do produto
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Produto</ListGroup.Item>
                        <ListGroup.Item>Produto</ListGroup.Item>
                        <ListGroup.Item>Produto</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Comprar</Card.Link>
                        <Card.Link href="#">Adicionar ao carrinho</Card.Link>
                    </Card.Body>
                </Card>
        </div>
    )
}