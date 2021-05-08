import { Dispatch, useReducer } from "react";

import {
 CLIENT_EMAIL,
 doc,
 PRIVATE_KEY,
 SHEET_ID
} from "../constants/GoogleSheets";
import REGISTER_CONSTANT from "../constants/RegisterConstant";
import { UnreachableCaseError } from "../helpers/UnreachableCaseError";
import { ReducerActionType } from "../types/globals";
import { RegisterTypes } from "../types/idf";

type State = {
  data: RegisterTypes;
  isLoading: boolean;
};

type StudentRegisterGoogleSheetType = {
  NO: null;
  NAMA_LENGKAP: string;
  ALAMAT: string;
  RT_RW: string;
  KABUPATEN: string;
  PROVINSI: string;
  NO_HP: string;
  TEMPAT_LAHIR: string;
  TANGGAL_LAHIR: string;
  JENIS_KELAMIN: string;
  NAMA_SMA_SMK_ASAL: string;
  LULUSAN_TAHUN: string;
  PROGRAM_KEAHLIAN_PROFESI_1_TAHUN: string;
  NAMA_ORANG_TUA: string;
  ALAMAT_ORANG_TUA: string;
  NO_HP_ORANG_TUA: string;
  PENDIDIKAN_ORANG_TUA: string;
  PEKERJAAN_ORANG_TUA: string;
  TANGGAL_DAFTAR: Date;
};

const initialState: State = {
  data: {
    fullName: "",
    address: "",
    rtRw: "",
    district: "",
    province: "",
    phoneNumber: "",
    birthOfPlace: "",
    birthOfDate: "",
    gender: "",
    nameOfHighSchool: "",
    graduation: "",
    parentFullName: "",
    parentAdress: "",
    parentPhoneNumber: "",
    parentEducation: "",
    parentJob: "",
    expertiseProgram: "",
    registerDate: new Date()
  },
  isLoading: true
};

const reducer = (state: State, action: ReducerActionType): State => {
  switch (action.type) {
    case REGISTER_CONSTANT.SET_DATA_REGISTER:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case REGISTER_CONSTANT.SET_IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      throw new UnreachableCaseError(action);
  }
};

const asyncDispatch = (
  _state: State,
  dispatch: Dispatch<ReducerActionType>
): Dispatch<ReducerActionType> => (action: ReducerActionType): void => {
  switch (action.type) {
    case REGISTER_CONSTANT.SET_DATA_REGISTER:
      dispatch({ type: REGISTER_CONSTANT.SET_IS_LOADING });

      const {
        fullName,
        address,
        rtRw,
        district,
        province,
        phoneNumber,
        birthOfPlace,
        birthOfDate,
        gender,
        nameOfHighSchool,
        graduation,
        parentFullName,
        parentAdress,
        parentPhoneNumber,
        parentEducation,
        parentJob,
        expertiseProgram,
        registerDate
      } = action.payload;

      const appendSpreadsheet = async (row: StudentRegisterGoogleSheetType) => {
        try {
          await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY
          });
          // loads document properties and worksheets
          await doc.loadInfo();
          const sheet = doc.sheetsById[SHEET_ID];
          await sheet.addRow(row);

          // const result = await sheet.addRow(row);
          // console.log(result);
        } catch (e) {
          console.error("Error: ", e);
        }
      };

      const newRow: StudentRegisterGoogleSheetType = {
        NO: null,
        NAMA_LENGKAP: fullName,
        ALAMAT: address,
        RT_RW: rtRw,
        KABUPATEN: district,
        PROVINSI: province,
        NO_HP: phoneNumber,
        TEMPAT_LAHIR: birthOfPlace,
        TANGGAL_LAHIR: birthOfDate,
        JENIS_KELAMIN: gender,
        NAMA_SMA_SMK_ASAL: nameOfHighSchool,
        LULUSAN_TAHUN: graduation,
        PROGRAM_KEAHLIAN_PROFESI_1_TAHUN: expertiseProgram,
        NAMA_ORANG_TUA: parentFullName,
        ALAMAT_ORANG_TUA: parentAdress,
        NO_HP_ORANG_TUA: parentPhoneNumber,
        PENDIDIKAN_ORANG_TUA: parentEducation,
        PEKERJAAN_ORANG_TUA: parentJob,
        TANGGAL_DAFTAR: registerDate
      };

      appendSpreadsheet(newRow);
      return;
    default:
      dispatch(action);
  }
};

const useRegister = (): [State, Dispatch<ReducerActionType>] => {
  const [state, _dispatch] = useReducer(reducer, initialState);

  const dispatch = asyncDispatch(state, _dispatch);

  return [state, dispatch];
};

export default useRegister;
