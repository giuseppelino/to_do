function Todo({todo,index,remove}){
    function handle(){
        remove(index);
    }
    return <div className='todo-row' onClick={handle}>{todo.text}  *</div>

}