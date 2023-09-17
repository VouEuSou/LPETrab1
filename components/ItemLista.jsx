import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

export default function ItemLista(props) {
 return (
<div className="col-md-2 mb-4">
    <Card>
        <Link href={`visualizar/${props.album.id}`}>
            <div className="text-center mt-3 mb-2">
                <Card.Img 
                    variant="top" 
                    src={props.album.capa} 
                    alt={`${props.album.titulo}`} 
                    style={{
                        maxWidth: '200px', 
                        margin: 'auto',
                        borderRadius: '10px' 
                    }}
                />
            </div>
        </Link>
        <Card.Body>
            <Card.Title style={{ marginBottom: '1rem', fontSize: 27 }}>{props.album.titulo}</Card.Title>
            <Card.Text style={{ marginBottom: '0.2rem' }}>
                Artista: {props.album.artista}
            </Card.Text>
            <Card.Text style={{ marginBottom: '0.2rem' }}>
                Gênero: {props.album.genero}
            </Card.Text>
            <Card.Text>
                Preço: R$ {props.album.preco}
            </Card.Text>
        </Card.Body>
    </Card>
</div>


)
}