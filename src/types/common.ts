export type ServerActionResponse<Data> = {
  status: "success" | "error";
  data?: Data;
  errorMessage?: string;
};
