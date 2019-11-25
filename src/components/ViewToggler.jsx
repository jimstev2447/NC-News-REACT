import React from 'react';

const ViewToggler = props => {
  return props.value ? <div>{props.children}</div> : <></>;
};

//statefull component click changes that, state should just have bool in it

export default ViewToggler;
