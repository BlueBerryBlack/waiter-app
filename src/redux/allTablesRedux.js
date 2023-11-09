// selectors


// actions.js
export const ALL_TABLES = "ALL_TABLES";

export const allTables = tables => ({
  type: ALL_TABLES,
  payload: tables
});

// action creators

const dataReducer = (state, action) => {
    switch (action.type) {
      case ALL_TABLES:
        return {
          ...state,
          tables: action.payload
        };
      default:
        return state;
    }
  };

  export default dataReducer