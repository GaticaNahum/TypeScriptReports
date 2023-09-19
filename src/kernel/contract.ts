export interface UseCase<Input, Output> {
    exceute(payload?: Input): Promise<Output>;
}