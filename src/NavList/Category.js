import React from 'react';
import {Route} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

const Category = ({ match }) => {
    return( 
        <div> 
            <Nav variant="pills" defaultActiveKey="/Category">
                <Nav className="mr-auto" style={{paddingLeft: 80}}>
                    <Nav.Item>
                        <Nav.Link href={`${match.url}/Shoes`} eventKey={`${match.url}/Shoes`}>Shoes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>   
                        <Nav.Link href={`${match.url}/Boots`} eventKey={`${match.url}/Boots`}>Boots</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`${match.url}/Footwear`} eventKey={`${match.url}/Footwear`}>Footwear</Nav.Link>
                    </Nav.Item>
                </Nav>

            </Nav>

            <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
        </div>
    )
}
export default Category;