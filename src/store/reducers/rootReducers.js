const initState = {
    users:[
        {id: 1, name: 'Kite'},
        {id: 2, name: 'Dao Tuan Kiet'}
    ]
}
const rootReducers = (state = initState, action)=>{
    switch(action.type){
        case 'DELETE_USER':
            console.log('return delete user function', action);
            let users = state.users;
            let updatedDeleteUsers = users.filter(item=> item.id!==action.payload.id);
            return { // update lại state gán giá trị mới bằng updatedUsers
                ...state,users:updatedDeleteUsers
            };
            
            case 'CREATE_USER':
            console.log('return delete user function', action);
            let id = Math.floor(Math.random()* 1000);
            let user = {
                id: id,
                name: `random - ${id}`
            }
            let updatedCreateUsers =  [...state.users,user]; // thêm mới bằng user
            //let updatedCreateUsers = state.users.push(user);
            return { // update lại state gán giá trị mới bằng updatedUsers
                ...state,users:updatedCreateUsers
            };
            
        default:
            return state;
    }
    
}

export default rootReducers;