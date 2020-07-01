import React from 'react';
import { Badge } from 'react-bootstrap';

export default function index(props) {
  const { value, ...rest } = props;
  return (
      <Badge {...rest}>{value}</Badge>
  );
}
