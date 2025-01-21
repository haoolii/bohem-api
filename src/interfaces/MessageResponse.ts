export enum StatusCode {
  SUCCESS = 0,
  ERROR = 1,
  FAILED = 2,
}
export default interface MessageResponse<T = unknown> {
  message: string;
  data?: T | null;
  code: StatusCode;
  error?: unknown;
}
