const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      console.log('Added an order');
      return state;
    }
    case 'ADD_TASK_ERR': {
      console.log('An error occured');
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
