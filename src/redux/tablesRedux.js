//selectors

// actions
const createActionName = actionName => `app/tables/${actionName}`;
export const ALL_TABLES = "ALL_TABLES";
const UPDATE_TABLE = "UPDATE_TABLE";

export const allTables = tables => ({
  type: ALL_TABLES,
  payload: tables
});

export const updateTable = table => ({
  type: UPDATE_TABLE,
  payload: table
}
);

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ALL_TABLES:
        return action.payload;

        case UPDATE_TABLE :
          return statePart.map(table=> table.id === action.payload.id?{...table, ...action.payload}:table)

    default:
      return statePart;
  };
};
export default tablesReducer;

