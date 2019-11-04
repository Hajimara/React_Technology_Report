const initalState = {
    counter: 1
}
function reducer(state = initalState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            };
        default:
            return state;
    }
}