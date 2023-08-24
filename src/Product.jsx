import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Detail from './Components/Detail';

const Products = (props) => {
    const [detail, setDetail] = useState(false)
     const { id, title,  price,  image, } = props;

     const openDetail = () => {
        setDetail( detail=> !detail);
     }

    return (
        <div>
            <Card style= {{width: '18rem', padding:'1rem', display:'flex', height:'55rem'}}>
                <Card.Body>
                    <Card.Img src={image} alt=""  style={{height:'15rem'}}/>
                    <Card.Text style={{border:'none',backgroundColor:'orange',color:'white', borderRadius:'50%', width:'3rem',height:'3rem', fontWeight:'bolder',fontSize:'x-large', padding:'6px', margin:'1rem' }} >{id}</Card.Text>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{fontWeight:'bolder'}}>{price}€</Card.Text>
                    <Link onClick={openDetail}>See More</Link> 
                    <Detail detail={detail} setDetail={setDetail}/>
                   
                    {/* <Card.Text style={{fontStyle:'italic'}}>{description}</Card.Text>
                    <Card.Text style={{fontWeight:'bolder', color:'red'}}>{rating.rate}</Card.Text>
                    <Card.Text style={{fontWeight:'bolder'}}>{rating.count}</Card.Text>
                    <Card.Text style={{fontWeight:'bolder'}}>{category}</Card.Text>    */}
                </Card.Body>
            </Card>
         
        </div>
    );
};

export default Products;