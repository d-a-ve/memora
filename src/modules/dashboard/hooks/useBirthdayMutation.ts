import { ErrorType } from "@/types";
import {
  QueryClient,
  UseMutationOptions,
  useMutation,
} from "@tanstack/react-query";

const useBirthdayMutation = <
  TData = unknown,
  TError = ErrorType,
  TMutationFnArgs = void,
  TContext = unknown
>(
  mutationOptions: UseMutationOptions<TData, TError, TMutationFnArgs, TContext>,
  queryClient?: QueryClient
) => {
  const birthdayMutation = useMutation<
    TData,
    TError,
    TMutationFnArgs,
    TContext
  >(mutationOptions, queryClient);

  return birthdayMutation;
};

export default useBirthdayMutation;
