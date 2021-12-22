import { Card, Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";



function MovieCard({ el, movies, setMovies }) {
    const filter = (id) => setMovies(movies.filter(el => el.id !== id))
    return (


        <Card style={{ width: '18rem', margin: '10px', borderRadius: '20px' }}>
            <Card.Img style={{ width: '18rem', height: '300px', borderRadius: '20px' }} variant="top" src={el.photo} />
            <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                    {el.description}
                </Card.Text>



            </Card.Body>

            <div className="Reactstars">
                <ReactStars
                    count={5}
                    value={el.rate}
                    size={24}
                    activeColor="#ffd700"
                /></div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Button style={{ width: '120px', }} variant="danger" onClick={() => filter(el.id)} >Delete</Button>
            </div>

        </Card>

    )
}
export default MovieCard;