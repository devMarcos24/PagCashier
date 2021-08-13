export default function getValidation(err: any) {
  const ValidationErrors: any = {};

  err.inner.forEach((error: any) => {
    ValidationErrors[error.path] = error.message;
  });

  return ValidationErrors;
}