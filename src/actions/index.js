/*action 객체를 만드는 액션 생성 함수들을 선언
    여기에서 () => ({})은 function() { return {} } 와 동일한 의미
*/

import * as types from './ActionTypes';

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

export const setColor = (color) => ({
    type: types.SET_COLOR
    , color
});