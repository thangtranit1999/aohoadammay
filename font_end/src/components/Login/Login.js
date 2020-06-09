import React, { useState } from 'react';
import Input from '../Common/Input';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginInfo } from '../../actions/loginActions';
import { NotificationManager } from 'react-notifications';
import { Redirect } from 'react-router-dom';

const axios = require('axios').default;

const Login = () => {
  const dispatch = useDispatch();

  const [inLogged, setLogged] = useState(false);

  const account = useSelector((state) => {
    return state.login;
  });

  const handleChange = ({ target }) => {
    const payload = { [target.name]: target.value };
    dispatch(changeLoginInfo(payload));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
  };

  const login = () => {
    axios
      .post('http://localhost:5000/user/login', account)
      .then((result) => {
        console.log(result);
        setLogged(true);
      })
      .catch(({ response }) => {
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        response.data.statusCode === 404 &&
          NotificationManager.error(
            'Sai tài khoản hoặc mật khẩu',
            'Đăng nhập thất bại'
          );
      });
  };

  return (
    <div className='Login'>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src='./images/img_login.svg'
            className='img-fluid'
            alt='login illustrator'
            type='text'
          />
        </div>
        <div className='col-md-4 m-auto'>
          <h1 className='mb-4'>Đăng nhập</h1>
          <form onSubmit={handleSubmit}>
            <Input
              name='username'
              label='Tài khoản'
              type='text'
              value={account.username}
              onChange={handleChange}
              helpText='Tài khoản không tồn tại'
            />
            <Input
              name='password'
              label='Mật khẩu'
              type='password'
              value={account.password}
              helpText='Sai mật khẩu'
              onChange={handleChange}
            />
            <button type='submit' className='btn btn-primary'>
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
      {inLogged && <Redirect to='/todo' />}
    </div>
  );
};

export default Login;
