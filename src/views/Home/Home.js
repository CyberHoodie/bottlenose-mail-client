import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Row as="main">
      <Col>
        <h2>To create your disposable inbox:</h2>
        <ol className="primary">
          <li>
            Click the "Create New Inbox" button above. DO NOT exit the window
            while the page is refreshing.
          </li>
          <li>
            Once the page refreshes, an empty inbox will be generated. Your
            auto-generated temporary email address will be listed above your
            inbox.
          </li>
          <li>
            After 1:00am Eastern Time, your temporary email address will expire and any
            emails in your inbox will be deleted.
          </li>
        </ol>
      </Col>
    </Row>
  );
}
