export const SET_FINGERPRINT = "SET_FINGERPRINT";
export const SET_IP = "SET_IP";
export const SET_SOCKET = "SET_SOCKET";
export const SET_USER_INFO = "SET_USER_INFO";

const initialState = {
  fingerprint: "",
  ip: "",
  userInfo: {},
  socket: null
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

    case SET_SOCKET: {
      return {
        ...state,
        socket: action.payload
      };
    }

    case SET_USER_INFO: {
      return {
        ...state,
        userInfo: action.payload
      };
    }

    default: {
      return { ...state };
    }
  }
};

export const setUserInfo = userInfo => dispatch => {
  dispatch({ type: SET_USER_INFO, payload: userInfo });
};

export const setFingerprint = fingerprint => dispatch => {
  dispatch({ type: SET_FINGERPRINT, payload: fingerprint });
};

export const setIp = ip => dispatch => {
  dispatch({ type: SET_IP, payload: ip });
};

export const setSocket = socket => dispatch => {
  dispatch({ type: SET_SOCKET, payload: socket });
};
