import { ErrorType } from "@/types";
import {
  QueryClient,
  QueryKey,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

export const useBirthdayQuery = <
  TQueryFnData = unknown,
  TError = ErrorType,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryOptions: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  queryClient?: QueryClient
) => {
  const birthdayQuery = useQuery<TQueryFnData, TError, TData, TQueryKey>(
    queryOptions,
    queryClient
  );
  return birthdayQuery;
};
