import * as types from '../actions/ActionTypes';

const initialState = {
    color: 'black'
    , number: 0
};

/*리듀서 함수를 정의 리듀서는 state와 action을 파라미터로 받는다.
    state가 undefined일 때(스토어가 생성될 때) state기본 값을 initialState로 사용
    이때 주의할 점은 state를 직접 수정하면 안되고,
    기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야 합니다.
*/

function counter(state = initialState, action) {
    switch(action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };
        case types.DECREMENT:
            return {
                ...state
                , number: state.number - 1
            };
        case types.SET_COLOR:
            return {
                ...state
                , color: action.color
            };
        default:
            return state;
    }
};

export default counter;