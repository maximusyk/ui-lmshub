/* eslint-disable @typescript-eslint/no-explicit-any */
export const checkUpdateFieldsChanges = <T>(initialValues: T, formValues: T) => {
  return Object.keys(formValues).some((formKey) => {
    return (
      (initialValues as any)[formKey] !== (formValues as any)[formKey] &&
      (formKey !== 'password' || !!(formValues as any)?.['password'])
    );
  });
};
