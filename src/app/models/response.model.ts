interface ResponseWrapper<T> {
  outcome: string;
  message: string;
  data: T;
}
