import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query';

import { IGetCustomerRequestParams, IGetCustomerResponse, postCustomer } from '@Service/customer';

const useCreateCustomerMutation = (
  config: UseMutationOptions<IGetCustomerResponse, AxiosError, IGetCustomerRequestParams, unknown>,
): UseMutationResult<IGetCustomerResponse, AxiosError<unknown>, IGetCustomerRequestParams, unknown> => {
  const mutation = useMutation<IGetCustomerResponse, AxiosError, IGetCustomerRequestParams, unknown>(
    postCustomer,
    config,
  );
  return mutation;
};

export default useCreateCustomerMutation;
