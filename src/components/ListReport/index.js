import React from 'react'

import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

const ListReport = () => (
  <List
    height={348}
    width={285}
  >
    {Row}
  </List>
);

export default ListReport