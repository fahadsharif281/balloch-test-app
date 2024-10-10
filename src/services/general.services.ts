import { IBooks } from "../models/IBooks";
import { IDashboardReducerAPIResponse } from "../models/IDashboardRedcuer";
import { ILoactionReducer } from "../models/ILocationReducer";
import { HTTP_CLIENT } from "../utils/config";

export const getAllRoutesOfSideBar = async (): Promise<any> => {
  return HTTP_CLIENT.get<IBooks>("/api/screen_type/getAll");
};

export const getAllLocationsByTypeApiCall = async (
  type: string
): Promise<any> => {
  return HTTP_CLIENT.get<ILoactionReducer>(
    `/api/location/getLocationByTypeWithOnePic/?type=${type}`
  );
};

export const getAllMapLocationsAPICall = async (): Promise<any> => {
  return HTTP_CLIENT.get<IDashboardReducerAPIResponse>(
    `/api/location/getAllLocations`
  );
};

export const postCreateLocationApiCall = async (params: any): Promise<any> => {
  return HTTP_CLIENT.post<any>(`/api/location/createLocation`, params, {
    headers: {
      "Content-Type": "multipart/form-data;",
    },
  });
};
export const getContactUsDataApiCall = async (): Promise<any> => {
  return HTTP_CLIENT.get<any>(`/api/contact_us/getContact_us`);
};
export const postEditLocationApiCall = async (params: any): Promise<any> => {
  return HTTP_CLIENT.put<any>(`/api/location/updateLocation`, params, {
    headers: {
      "Content-Type": "multipart/form-data;",
    },
  });
};

export const deleteLocationApiCall = async (id: string): Promise<any> => {
  return HTTP_CLIENT.delete<any>(`/api/location/deleteLocation/${id}`);
};
export const getManageWelcomeScreenContactDetailApiCall =
  async (): Promise<any> => {
    return HTTP_CLIENT.get<any>(`/api/contactDetails/getContactDetail`);
  };
export const getManageWelcomeScreenTitlesApiCall = async (): Promise<any> => {
  return HTTP_CLIENT.get<any>(`/api/title/getTitles`);
};

export const updateManageWelcomeScreenTitlesApiCall = async (
  params: any
): Promise<any> => {
  return HTTP_CLIENT.put<any>(`/api/title/updateTitle`, params);
};

export const updateManageWelcomeContactDetailApiCall = async (
  params: any
): Promise<any> => {
  return HTTP_CLIENT.post<any>(
    `/api/contactDetails/createContactDetails`,
    params
  );
};

export const getAllUsersScreenTypesApiCall = async (): Promise<any> => {
  return HTTP_CLIENT.get<any>(`/api/screen_type/getAll`);
};

export const updateScreenTypesScreenNameApiCall = async (
  params: any
): Promise<any> => {
  return HTTP_CLIENT.put<any>(`/api/screen_type/update`, params);
};

export const updateScreenTypesImageApiCall = async (
  params: any
): Promise<any> => {
  return HTTP_CLIENT.post<any>(`/api/screen_type/uploadImage`, params, {
    headers: {
      "Content-Type": "multipart/form-data;",
    },
  });
};
export const addScreenTypesApiCall = async (params: any): Promise<any> => {
  return HTTP_CLIENT.post<any>(`/api/screen_type/addScreenType`, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getAboutUsResultsApiCall = async (): Promise<any> => {
  return HTTP_CLIENT.get<any>(`/api/aboutUs/getAboutUs`);
};
export const addAboutUsResultsApiCall = async (params: any): Promise<any> => {
  return HTTP_CLIENT.post<any>(`/api/aboutUs/addaboutUs`, params);
};

export const getTermsAndConditionsApiCall = async (): Promise<any> => {
  return HTTP_CLIENT.get<any>(`/api/termsAndConditions/getTermsAndConditions`);
};
export const addTermsAndConditionsApiCall = async (
  params: any
): Promise<any> => {
  return HTTP_CLIENT.post<any>(
    `/api/termsAndConditions/addTermsAndConditions`,
    params
  );
};

export const getPrivacyPolicyApiCall = async (): Promise<any> => {
  return HTTP_CLIENT.get<any>(`/api/privacyPolicy/getPrivacyPolicy`);
};

export const addPrivacyPolicyApiCall = async (params: any): Promise<any> => {
  return HTTP_CLIENT.post<any>(`/api/privacyPolicy/addPrivacyPolicy`, params);
};
export const getAllUsersDashboard = async (): Promise<any> => {
  return HTTP_CLIENT.get<any>(`/api/user/getAllUsers/`);
};
export const updateNewPassword = async (params: any): Promise<any> => {
  return HTTP_CLIENT.put<any>(`/api/admin/updateAdminPassword/`, params);
};
export const getAllContentCardApiCall = async (): Promise<any> => {
  return HTTP_CLIENT.get<any>(`/api/contents_cards/getContentsCards`);
};
export const getWebPageContentApiCall = async (): Promise<any> => {
  return HTTP_CLIENT.get<any>(`/api/contents/getContents`);
};
export const postWebAddContent = async (params: any): Promise<any> => {
  return HTTP_CLIENT.post<any>(`/api/contents/addContent`, params, {
    headers: {
      "Content-Type": "multipart/form-data;",
    },
  });
};

export const addContentCardApiCall = async (params: any): Promise<any> => {
  return HTTP_CLIENT.post<any>(`/api/contents_cards/addContentCard`, params);
};
export const updateContentCardApiCall = async (params: any): Promise<any> => {
  return HTTP_CLIENT.put<any>(`/api/contents_cards/updateContentCard`, params);
};
export const deleteContentCardApiCall = async (id: string): Promise<any> => {
  return HTTP_CLIENT.delete<any>(
    `/api/contents_cards/deleteContentCard?content_id=${id}`
  );
};

export const updateUserAllCategoriesRoutes = async (
  params: any
): Promise<any> => {
  return HTTP_CLIENT.post<any>(`/api/screen_type/updateAllCategories`, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
