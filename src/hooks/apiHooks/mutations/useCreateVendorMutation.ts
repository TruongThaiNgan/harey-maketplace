import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query';

import { IGetVendorRequestParams, IGetVendorResponse, postVendor } from '@Service/vendor';

const useCreateVendorMutation = (
  config: UseMutationOptions<IGetVendorResponse, AxiosError, IGetVendorRequestParams, unknown>,
): UseMutationResult<IGetVendorResponse, AxiosError<unknown>, IGetVendorRequestParams, unknown> => {
  const mutation = useMutation<IGetVendorResponse, AxiosError, IGetVendorRequestParams, unknown>(postVendor, config);
  return mutation;
};

export default useCreateVendorMutation;
