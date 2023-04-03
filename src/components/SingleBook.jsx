import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class SingleBook extends Component {
    state = {
        selected: false,
    }

    selectedCard = () => { // toggle del valore
        this.setState({selected: !this.state.selected})
    }


    render () {
        return (
    <Card className={`${this.state.selected ? "shadow-lg border border-4 border-danger" : ""}`}
        onClick={this.selectedCard}>{/*al click della card cambia lo stato di selected a vero e si verifica la prima condizone del ternary*/}
      <Card.Img variant="top" src={this.props.book.img} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{this.props.book.title}</Card.Title>
        <Card.Text>
          Category - <span className="fw-bold">{this.props.book.category}</span> <br /> Price - <span className="fw-bold">{this.props.book.price}$</span>
        </Card.Text>
        <Button variant="primary">Buy now!</Button>
      </Card.Body>
    </Card>

        )
}}
 

export default SingleBook