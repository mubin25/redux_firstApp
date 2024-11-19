import {ADD_STUDENT, REMOVE_STUDENT} from './ActionType'

const initialState = {
    students:[],
};

const studentReducer = (state = initialState, action ) => {
    switch(action.type){
        case ADD_STUDENT:
            return{
                ...state,
                students: [...state.students, action.payload]
            }
        case REMOVE_STUDENT:
            return{
                ...state,
                students: state.students.filter((student) => student.name !==action.payload)
            }
            default:
                return state;

    }
    
}
export default studentReducer;