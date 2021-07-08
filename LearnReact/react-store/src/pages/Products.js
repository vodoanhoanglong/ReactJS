import React, { Component } from 'react';

import { Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap'; 

import { CartContext } from '../contexts/Cart';


class Products extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            products: [{
                "id": "96608b02-ce54-45bf-bc43-eb9d00cf659f",
                "name": "Wine - Magnotta - Bel Paese White",
                "description": "auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "eff86bd9-bdbf-428f-82ea-0badbf225239",
                "name": "Tomato Paste",
                "description": "pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "6d3d274b-4d26-45fe-af59-b9938d00f95d",
                "name": "Pear - Halves",
                "description": "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "63a618b8-dc7f-44e2-8707-0a0d342cdb8b",
                "name": "Wine - Peller Estates Late",
                "description": "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id",
                "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "19f97890-3811-438a-ad23-d1922daa514c",
                "name": "Table Cloth 62x120 White",
                "description": "suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "06de53d7-0f54-4600-9a2c-8796c5498dbe",
                "name": "Tea Leaves - Oolong",
                "description": "lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien",
                "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "a212d4cb-abe8-4dd9-b038-840c9c374638",
                "name": "Bread Sour Rolls",
                "description": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum",
                "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "6060db8e-9582-47b8-9684-7816e49eb633",
                "name": "Pasta - Rotini, Dry",
                "description": "velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "12b73a68-2ca4-4d62-bdfe-f477e20fe0a6",
                "name": "Sobe - Berry Energy",
                "description": "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "0889564b-b754-4a1f-8410-a6d73dbe211e",
                "name": "Wine - Champagne Brut Veuve",
                "description": "sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "07a459a0-a048-49f2-b449-53d73f7c64a8",
                "name": "Gingerale - Diet - Schweppes",
                "description": "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "7e538905-6576-44f8-b74e-7ecbaac8e15c",
                "name": "Salmon Steak - Cohoe 6 Oz",
                "description": "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "25284a2d-3251-4098-a1ce-e2043a2428e1",
                "name": "Sage - Fresh",
                "description": "vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin",
                "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "24d10084-5ed5-4de0-b740-d01d65c5c603",
                "name": "Soap - Pine Sol Floor Cleaner",
                "description": "purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "31cef8f9-d3cb-4f86-a8fc-041303c4642a",
                "name": "Cinnamon Rolls",
                "description": "tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "f9539742-37ee-4497-af04-aae801a6d0fb",
                "name": "Pasta - Detalini, White, Fresh",
                "description": "pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "c8bc8f08-8ac2-46be-9689-33fda64525e7",
                "name": "Sauce - Hollandaise",
                "description": "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
                "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "dbfbf975-f155-4f15-aeea-57fff26b94ba",
                "name": "Artichokes - Jerusalem",
                "description": "auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "8061f4e3-ce60-4bf5-93e9-657e1e511db5",
                "name": "Salmon - Smoked, Sliced",
                "description": "donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "78a1a599-4993-47ca-98b5-ba80b2f48bbf",
                "name": "Soup - Chicken And Wild Rice",
                "description": "justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }]
        };
    }
    render()
    {
        const { products } = this.state;

        return(
        <Container>
             <h2>Products</h2>
             <Row>
                 {  products.map(product => (
                        <Col sm='4'>
                            <Card>
                                <CardImg top width="100%" src={product.imageUrl} />
                                <CardBody>
                                    <CardTitle tag="h5">{product.name}</CardTitle>
                                    <CardText>{product.description}</CardText>
                                    <CartContext.Consumer>
                                      {({ addToCart }) => 
                                        <Button onClick={() => addToCart(product)}>
                                          Add to cart
                                        </Button>
                                      }                
                                    </CartContext.Consumer>
                                </CardBody>
                            </Card>
                        </Col>
                    )) 
                 }
             </Row>
        </Container>
        );    
    }
}

export default Products;