import * as React from "react";

import Card from "react-bootstrap/Card";

import "../styles/components.css";

function InfoCard({ title, body }: InfoCardProps) {
  return (
    <Card className="info-card">
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
    </Card>
  );
}

export interface InfoCardProps {
  title: string;
  body: string;
}

export default InfoCard;
