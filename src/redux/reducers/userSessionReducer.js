export const SET_FINGERPRINT = "SET_FINGERPRINT";
export const SET_IP = "SET_IP";

const initialState = {
  fingerprint: "",
  ip: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FINGERPRINT: {
      return {
        ...state,
        fingerprint: action.payload
      };
    }

    case SET_IP: {
      return {
        ...state,
        ip: action.payload
      };
    }

    default: {
      return { ...state };
    }
  }
};

export const setFingerprint = fingerprint => dispatch => {
  dispatch({ type: SET_FINGERPRINT, payload: fingerprint });
};

export const setIp = ip => dispatch => {
  dispatch({ type: SET_IP, payload: ip });
};
