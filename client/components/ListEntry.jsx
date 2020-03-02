import React, { Component } from 'react';

const ListEntry = (props) => {
  return (
    <li>
      {props.todo}
    </li>
  )
};

export default ListEntry;