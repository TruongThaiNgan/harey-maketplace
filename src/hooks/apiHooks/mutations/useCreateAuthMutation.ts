import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query';

import { IGetAuthRequestParams, IGetAuthResponse, postAuth } from '@Service/auth';

const useCreateAuthMutation = (
  config: UseMutationOptions<IGetAuthResponse, AxiosError, IGetAuthRequestParams, unknown>,
): UseMutationResult<IGetAuthResponse, AxiosError<unknown>, IGetAuthRequestParams, unknown> => {
  const mutation = useMutation<IGetAuthResponse, AxiosError, IGetAuthRequestParams, unknown>(postAuth, config);
  return mutation;
};

export default useCreateAuthMutation;
