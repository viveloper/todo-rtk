import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../features/counter/counterSlice';

const UpdatedCount: React.FC = () => {
  const count = useSelector(selectCount);
  return <div>Todos Updated Count : {count}</div>;
};

export default UpdatedCount;
