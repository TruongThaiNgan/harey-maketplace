import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query';

import { IGetAuthFacebookRequestParams, IGetAuthFacebookResponse, postAuthFacebook } from '@Service/authFacebook';

const useCreateAuthFacebookMutation = (
  config: UseMutationOptions<IGetAuthFacebookResponse, AxiosError, IGetAuthFacebookRequestParams, unknown>,
): UseMutationResult<IGetAuthFacebookResponse, AxiosError<unknown>, IGetAuthFacebookRequestParams, unknown> => {
  const mutation = useMutation<IGetAuthFacebookResponse, AxiosError, IGetAuthFacebookRequestParams, unknown>(
    postAuthFacebook,
    config,
  );
  return mutation;
};

export default useCreateAuthFacebookMutation;
