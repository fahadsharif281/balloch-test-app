import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../../services/auth/Auth";
import { IUserServiceParams } from "../../models/IUser";
import { toast } from "react-toastify";

export const postLoginUserAsync = createAsyncThunk<any, any, any>(
  "user/postLoginUserAsync",
  async (params: IUserServiceParams, { rejectWithValue }) => {
    const { email, password, navigate } = params;
    try {
      const response = await loginService(email, password); // Assuming fetchUser returns a Promise
      if (response !== undefined && !response?.data?.error) {
        toast.success(response?.data?.message);
        navigate("/dashboard");
        return response.data;
      } else {
        toast.error(response?.data?.message);
        return rejectWithValue(response?.data);
      }
      // Assuming the user data is in response.data
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the user data is in response.data
    }
  }
);
