import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query';

import { IPostProductRequestParams, IPostProductResponse, postProduct } from '@Service/product';

const useCreateProductMutation = (
  config: UseMutationOptions<IPostProductResponse, AxiosError, IPostProductRequestParams, unknown>,
): UseMutationResult<IPostProductResponse, AxiosError<unknown>, IPostProductRequestParams, unknown> => {
  const mutation = useMutation<IPostProductResponse, AxiosError, IPostProductRequestParams, unknown>(
    postProduct,
    config,
  );
  return mutation;
};

export default useCreateProductMutation;
