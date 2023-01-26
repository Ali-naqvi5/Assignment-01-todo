import React, { useState } from 'react'




const Home = () => {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")
    const [selectedTodos, setSelectedTodos] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, {todo: newTodo, isSelected: false}])
        setNewTodo("")
    }

    const handleDeleteSelected = () => {
        const newTodos = todos.filter(todo => !todo.isSelected)
        setTodos(newTodos)
        setSelectedTodos([])
    }

    const handleCheckbox = (index) => {
        const newTodos = [...todos]
        newTodos[index].isSelected = !newTodos[index].isSelected
        setTodos(newTodos)
        setSelectedTodos(newTodos.filter(todo => todo.isSelected))
    }

    return (
        <div>

<form onSubmit={handleSubmit}>
                <input value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
                <button type="submit">Add Todo</button>
                {selectedTodos.length > 0 && <button onClick={handleDeleteSelected}>Delete Selected</button>}
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input 
                            type="checkbox" 
                            onChange={() => handleCheckbox(index)} 
                            checked={todo.isSelected}
                        />
                        {todo.todo}
                        
                    </li>
                ))}
            </ul>
            
        </div> )
}

export default Home
