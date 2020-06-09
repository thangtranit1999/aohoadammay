import React from 'react';

const TodoItem = ({ item }) => {
  return (
    <div class='alert border border-secondary my-1' role='alert'>
      <div className='row d-flex align-items-center'>
        <div className='col-1'>
          {item.isCompleted ? (
            <i
              class='fas fa-check-circle fa-2x text-success mr-2'
              style={{ cursor: 'pointer' }}
            ></i>
          ) : (
            <i class='fas fa-circle fa-2x text-info mr-2'></i>
          )}
        </div>
        <div className='col'>
          <p className='m-0'>{item ? item.content : ''}</p>
        </div>
        <div className='col-1'>
          <i class='fas fa-trash fa-2x text-danger'></i>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
