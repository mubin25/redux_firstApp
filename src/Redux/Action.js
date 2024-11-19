import {ADD_STUDENT, REMOVE_STUDENT} from './ActionType';

export const addStudent = (student) => ({
    type: ADD_STUDENT,
    payload: student,
})

export const removeStudent = (name) => ({
    type : REMOVE_STUDENT,
    payload : name
});