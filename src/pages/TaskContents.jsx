import { useState } from 'react'
import AddTask from '../components/tasks/AddTask'
import Search from '../components/tasks/Search'
import TaskHeader from '../components/tasks/TaskHeader'
import TaskList from '../components/tasks/TaskList'

export default function TaskContents() {
  // initial task
  const initialTask = {
    id: crypto.randomUUID(),
    title: 'React js',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, consequatur?',
    tags: ['React', 'Api'],
    priority: 'Medium',
    isFavorite: false,
  }
  const [tasks, setTasks] = useState([initialTask])
  const [showAddTask, setShowAddTask] = useState(false)
  // const [addTask, setAddTask] = useState(null)

  // add new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask])
    setShowAddTask(false)
  }

  // show add task

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddTask && <AddTask handleAddTask={handleAddTask} />}
        <div className="container">
          <Search />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskHeader setShowAddTask={setShowAddTask} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  )
}
