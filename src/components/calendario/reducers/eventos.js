const defaultState = {
    listado: []
};

export function eventosReducer(state = defaultState, action) {
    switch (action.type) {
        case ('EVENTOS_ACTUALIZADOS'):
            return {
                ...state,
                listado: action.listado
            }
        default:
            return state;
    }
}