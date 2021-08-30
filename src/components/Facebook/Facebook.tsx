import React, { useState } from 'react';
import FacebookLogin, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login';
import FacebookIcon from '@material-ui/icons/Facebook';

import { useAppDispatch } from '@Store/hooks';
import { updateAuth } from '@Slice/userSlice';
import useCreateAuthFacebookMutation from '@Mutation/useCreateAuthFacebookMutation';
import { setToken } from '@Util/localStorageService';

import { FacebookProps, IFackbook } from './interfaces';
import classes from './Facebook.module.scss';

const Facebook: React.FC<FacebookProps> = () => {
  // Hook states
  const dispatch = useAppDispatch();
  const { isLoading, mutate } = useCreateAuthFacebookMutation({
    onSuccess: ({ data }) => {
      setToken(data.accessToken);
      dispatch(updateAuth({ auth: true }));
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const [value, setValue] = useState<IFackbook>({
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  });

  // Hook effects

  // Constants

  // Action handlers
  const componentClicked = (): void => {
    console.log('click');
  };
  const responseFacebook = (res: ReactFacebookLoginInfo | ReactFacebookFailureResponse): void => {
    // res is ReactFacebookFailureResponse
    if ('status' in res) {
      setValue({ ...value, isLoggedIn: false });
    } else {
      // res is ReactFacebookLoginInfo
      if ('userID' in res) {
        dispatch(updateAuth({ auth: true }));
        mutate({
          userID: res.userID,
          accessToken: res.accessToken,
        });
      }
    }
  };
  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_APP_ID!}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      cssClass={classes.buttonFacebook}
      icon={<FacebookIcon />}
    />
  );
};

Facebook.defaultProps = {};
export default Facebook;
