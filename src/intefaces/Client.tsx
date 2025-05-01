export type ClientFormData = {
    typeClient: number;
    name: string;
    emailMain: string;
    password: string;
    confirmPassword: string;
    document: string;
    professionId?: string;
    birthDate?: string;
    gender?: number;
    matrialStatus?: number;
    identity?: string;
    dispatcherOrganizationIdentity?: string;
    dateIssuanceIdentity?: string;
    fantasyName?: string;
    cnae?: string;
    crea?: string;
    municipalRegistrationNumber?: string;
    stateRegistrationNumber?: string;
    addressesClient: {
      zipCode: string;
      neighborhood?: string;
      street?: string;
      number?: string;
      complement?: string;
      cityId: string;
      cityName: string;
      uf: string;
    }[];
    emailsClient: {
      address: string;
      main: boolean;
    }[];
    phonesClient: {
      number: string;
      main: boolean;
    }[];
  };
  