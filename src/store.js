export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts:[],
    slug:'Ab_4GeekAPI',
    delete:true

  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'load-contacts': 
    return {... store,
      contacts:action.payload};
    
      case 'delete':
        return{... store, delete:!store.delete};



    default:
      throw Error('Unknown action.');
  }    
}
