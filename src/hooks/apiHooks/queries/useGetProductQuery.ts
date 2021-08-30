import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { getProduct, IGetProductResponse } from '@Service/product';

const useGetProductQuery = (
  queryKey: string | string[],
  config?: UseQueryOptions<IGetProductResponse, AxiosError>,
): UseQueryResult<IGetProductResponse, AxiosError<unknown>> => {
  const query = useQuery<IGetProductResponse, AxiosError>(queryKey, getProduct, config);

  return query;
};

export default useGetProductQuery;
