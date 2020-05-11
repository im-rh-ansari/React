import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
        
        }
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
        const dispComments=comments.map((comment) => 
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author} , {comment.date}</p>
            </li>
            );

        if (comments != null){
            return dispComments;
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {
        if (this.props.selectedDish !=null){
            const comments = this.props.selectedDish.comments;
            console.log(typeof(comments));
            return (
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.selectedDish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4><strong>Comments</strong></h4>
                            <ul className="list-unstyled">
                                {this.renderComments(comments)}
                            </ul>
                        </div>    
                    </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

}

export default DishDetail;