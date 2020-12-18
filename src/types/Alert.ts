type Alert = {
  title?: string;
  message: string;
  severity?: "error" | "success" | "info" | "warning" | undefined;
};

export default Alert;
