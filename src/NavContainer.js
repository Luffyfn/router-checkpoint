import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';

function NavContainer() {
    return (
            <div>
                <Nav variant="pills">
                    <Nav.Item>
                        <Nav.Link href="/" eventKey="/Home">Home</Nav.Link>
                    </Nav.Item> 
                    <Nav.Item>
                        <Nav.Link href="/Category" eventKey="/Category">Category</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Products" eventKey="/Products">Products</Nav.Link>
                    </Nav.Item> 
                    <Nav.Item>
                        <Nav.Link href="/AdminArea" eventKey="/AdminArea">Admin area</Nav.Link>
                    </Nav.Item>      
                </Nav>
            </div>      
    )
}

export default NavContainer;
