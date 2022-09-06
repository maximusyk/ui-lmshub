interface IGenerateNames {
  firstName: string;
  lastName: string;
}

export const generateInitials = (names: IGenerateNames): string => {
  const firstName = names.firstName.split(' ')[0];
  const lastName = names.lastName.split(' ')[0];
  return `${firstName.charAt(0)}${lastName.charAt(0)}`;
};
