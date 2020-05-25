import React from 'react';
import Product from './Product';
import {Nav} from 'react-bootstrap';
import {Route} from 'react-router-dom';
import './Products.css'

function Products({match}) {
    
    const productsData = [
        {
          id: 1,
          name: 'NIKE Liteforce Blue Sneakers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
          status: 'Available'
        
        },
        {
          id: 2,
          name: 'Stylised Flip Flops and Slippers',
          description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
          status: 'Out of Stock'
        
        },
        {
          id: 3,
          name: 'ADIDAS Adispree Running Shoes',
          description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
          status: 'Available'
        },
        {
          id: 4,
          name: 'ADIDAS Mid Sneakers',
          description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
          status: 'Out of Stock'
        },   
    ];

    var linkList = productsData.map((product) => {
        return(
            <Nav.Item key = {product.id}>
                <Nav.Link href={`${match.url}/${product.id}`}>{product.name}</Nav.Link>
            </Nav.Item>
        )
    })

    return (
        <div className="container">
            <div>
                <div className="title">
                    <h3 style={{margin: 10}}>Products</h3>
                    <ul> {linkList} </ul>
                </div>
            </div>
            
            <div className="routes">
                <Route 
                    path={`${match.url}/:productId`}
                    render={(props) => <Product data={productsData} {...props}/>}
                />

                <Route 
                    exact path={match.url}
                    render={() => 
                        <h5 style={{position: "relative", top: -20, }}
                    >Please select a product.</h5>}
                />
            </div>
    </div>
  )
}

export default Products;
