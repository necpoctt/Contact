import axiosInstance from '../common/axios';

export default class ContactsService {
  static async gerContacts() {
    const response: IContactsAPI = await axiosInstance.get(`/contacts`);

    return response.data;
  }


  static async deleteContactById(id: Number) {
    const response: IContactsAPI = await axiosInstance.delete(`/contacts/${id}`);

    return response;
  }
}
