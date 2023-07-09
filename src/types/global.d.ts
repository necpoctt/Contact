declare global {
  interface IContacts {
    first_name: string;
    id: Number;
    last_name: string;
    job: string;
    description: string;
  }

  interface IContactsAPI {
    data: IContacts[];
    message: String;
    statusCode: Number;
  }
}

export { };
