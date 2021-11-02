const DISPLAY_GREETINGS = 'HELLO/DISPLAY_GREETINGS';

const loadGreetings = (json) => ({
  type: DISPLAY_GREETINGS,
  json,
});

const greetingReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_GREETINGS:
      return action.json.map((message) => {
        const { id, greeting } = message;
        return {
          id,
          greeting,
        };
      });
    default:
      return state;
  }
};

const getGreetings = () => (dispatch) => {
  fetch('https://hello-world-rails-react-api.herokuapp.com/api/v1/messages')
    .then((Response) => Response.json())
    .then((json) => dispatch(loadGreetings(json)));
};

export { loadGreetings, greetingReducer, getGreetings };
