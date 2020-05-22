import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
        const dispComments=comments.map((comment) => 
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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

    const DishDetail = (props) => {

        if (props.dish !=null){
            const comments = props.dish.comments;
            return (
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <RenderDish dish={props.dish} />
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                <h4><strong>Comments</strong></h4>
                                <ul className="list-unstyled">
                                    <RenderComments comments = {props.dish.comments} />
                                </ul>
                            </div>    
                        </div>
                    </div>
            );
        }
        else
            return(
                <div></div>
            );        
    
    }
        
    



export default DishDetail;