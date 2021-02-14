import React, { useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import ReactSwing from 'react-swing';

const App = () => {
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
    fontSize: '25px',
    border: '10px solid #f24141',
    boxSizing: 'border-box',
    margin: 'auto',
    padding: '20px',
    cursor: 'default',
  };

  const renderCards = () => {
    const cardData = [
      {
        text: '💕',
        fontSize: '100px',
      },
      {
        text: 'To Kathrin',
        fontSize: '40px',
        lineHeight: '250px',
      },
      {
        text: 'From Steven',
        fontSize: '40px',
        lineHeight: '250px',
      },
      {
        text: 'I love you so much.',
      },
      {
        text: 'Thank you for everything you do for me.',
      },
      {
        text: 'My life is so much happier than before you were in it.',
      },
      {
        text: `Happy Valentine's day!`,
      },
      {
        text: '💕',
        fontSize: '100px',
      },
    ];

    const cards = [];

    for (let i = 0; i < cardData.length; i++) {
      const data = cardData[i];

      cards.push(
        <Card
          style={{
            ...cardStyle,
            fontSize: data.fontSize ? data.fontSize : cardStyle.fontSize,
            lineHeight: data.lineHeight ? data.lineHeight : cardStyle.lineHeight,
          }}
        >
          {data.image ? <Card.Img draggable="false" variant="top" src={`${data.image}`} /> : ''}
          <Card.Body className="justify-content-center ">
            <Card.Text style={{ whiteSpace: 'pre-wrap' }} md="auto">
              {data.text}
            </Card.Text>
          </Card.Body>
        </Card>,
      );
    }

    return cards.reverse();
  };

  return (
    <div style={{ width: 20 }}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <ReactSwing style={stackStyle} throwout={(e) => console.log('throwout', e)}>
              {renderCards()}
            </ReactSwing>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
