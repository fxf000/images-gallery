import React from 'react';
import Button from 'react-bootstrap/Button';

const Welcome = () => (
  <div className="Jumbotron">
    <h1>Images Gallery</h1>
    <p>
      This is simple application that retrive photos using Unsplach API. In
      order to start enter any search term in the input field.
    </p>
    <p>
      <Button href="https://unsplash.com" targrt="_blank">
        Learn more
      </Button>
    </p>
  </div>
);

export default Welcome;
