import FacebookIcon from '@material-ui/icons/Facebook';
import React, { useState } from 'react';
import FacebookLogin, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login';

import { updateAuth } from '@Slice/userSlice';
import { useAppDispatch } from '@Store/hooks';

import classes from './Facebook.module.scss';
import { IFacebook } from './interfaces';

const Facebook: React.FC = () => {
  // Hook states
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<IFacebook>({
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  });

  // Action handlers
  const responseFacebook = (res: ReactFacebookLoginInfo | ReactFacebookFailureResponse): void => {
    // res is ReactFacebookFailureResponse
    if ('status' in res) {
      setValue({ ...value, isLoggedIn: false });
    } else {
      // res is ReactFacebookLoginInfo
      if ('userID' in res) {
        dispatch(updateAuth({ auth: true }));
      }
    }
  };
  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_APP_ID!}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass={classes.buttonFacebook}
      icon={<FacebookIcon />}
    />
  );
};

Facebook.defaultProps = {};
export default Facebook;
