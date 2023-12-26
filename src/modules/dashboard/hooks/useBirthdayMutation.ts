import {
  QueryClient,
  UseMutationOptions,
  useMutation,
} from "@tanstack/react-query";

const useBirthdayMutation = <TData, TError, TMutationFnArgs, TContext>(
  mutationOptions: UseMutationOptions<TData, TError, TMutationFnArgs, TContext>,
  queryClient?: QueryClient
) => {
  const birthdayMutation = useMutation(mutationOptions, queryClient);

  return birthdayMutation;
};

export default useBirthdayMutation;
