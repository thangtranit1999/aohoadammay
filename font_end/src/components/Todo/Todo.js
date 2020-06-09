import React from 'react';
import Input from '../Common/Input';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TodoItem from '../TodoItem/TodoItem';

const Todo = () => {
  return (
    <div className='Todo'>
      {/* <form>
        <div>
          <Input name='todo' type='text' placeholder='Thêm mới' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Thêm
        </button>
      </form>
      <div className='todo-list my-2'>
        <TodoItem item={{ content: 'asdfadfaf' }} />
        <TodoItem item={{ content: 'asdfadfaf' }} />
        <TodoItem item={{ content: 'asdfadfaf' }} />
      </div> */}
      <div className='row'>
        <img
          src='./images/welcome.jpg'
          class='img-fluid mx-auto'
          alt='welcome'
        />
      </div>
    </div>
  );
};

export default Todo;
