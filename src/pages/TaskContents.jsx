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
  const [updateTask, setUpdateTask] = useState(null)

  // add new task
  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask])
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask
          }
          return task
        })
      )
    }
    setShowAddTask(false)
  }

  // handle edit task
  const handleEditTask = (task) => {
    setUpdateTask(task)
    setShowAddTask(true)
  }

  // close modal
  const handleCloseTask = () => {
    setShowAddTask(false)
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddTask && (
          <AddTask
            handleAddTask={handleAddTask}
            handleCloseTask={handleCloseTask}
            updateTask={updateTask}
          />
        )}
        <div className="container">
          <Search />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskHeader
              setShowAddTask={setShowAddTask}
              handleEditTask={handleEditTask}
            />
            <TaskList tasks={tasks} handleEditTask={handleEditTask} />
          </div>
        </div>
      </section>
    </>
  )
}
