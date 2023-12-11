import React from 'react';
import Person from './Person';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <Person id={id}/>
        );
      })}
    </>
  );
};

export default List;