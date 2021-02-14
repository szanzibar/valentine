import React, { useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import ReactSwing from 'react-swing';

const App = () => {
  const [stack, setStack] = useState(null);
  const [cardCount, setCardCount] = useState(4);
  const stackEl = useRef();

  const stackStyle = {
    width: '400px',
    height: '400px',
    position: 'absolute',
    top: '200px',
    left: '50%',
    marginLeft: '-200px',
    borderRadius: '10px',
  };

  const cardStyle = {
    width: '400px',
    height: '400px',
    listStyle: 'none',
    background: '#fff',
    borderRadius: '5px',
    position: 'absolute',
    top: '0',
    left: '0',
    boxShadow: '0 0 2px rgba(0,0,0,.2), 1px 1px 1px rgba(0,0,0,.2)',
    textAlign: 'center',
    fontSize: '18px',
    border: '10px solid #f24141',
    boxSizing: 'border-box',
    cursor: 'default',
  };

  const renderCards = () => {
    const cardData = [
      {
        image: 'logo192.png',
        text: 'Hello!',
      },
      {
        image: 'logo512.png',
        text: 'This is another text!',
      },
    ];

    const cards = [];

    for (let i = 0; i < cardCount; i++) {
      const data = cardData[i % cardData.length];

      cards.push(
        <Card style={cardStyle}>
          <Card.Img variant="top" src={`${data[i].image}/100px180`} />
          <Card.Body>
            <Card.Text>{data[i].text}</Card.Text>
          </Card.Body>
        </Card>,
      );
    }

    return cards;
  };

  return (
    <div style={{ width: 20 }}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <ReactSwing
              style={stackStyle}
              setStack={(stack) => setStack(stack)}
              ref={stackEl}
              throwout={(e) => console.log('throwout', e)}
            >
              {renderCards()}
            </ReactSwing>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
