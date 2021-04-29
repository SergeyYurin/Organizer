import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './OrderTrackerComponents/Header';
import Footer from './OrderTrackerComponents/Footer';
import About from './OrderTrackerComponents/About';
import MainName from './OrderTrackerComponents/MainName';
import Tasks from './OrderTrackerComponents/Tasks';
import AddTask from './OrderTrackerComponents/AddTask';
import './OrderTracker.css';

const Hero = ({ handleLogout }) => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //Add Task
  const addTask = async (task) => {
    const addedTask = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await addedTask.json();
    //need to solve this problem
    setTasks([...tasks, data]);
  };
  // const id = Math.floor(Math.random() * 10000) + 1;
  // const newTask = { id, ...task };
  // setTasks([...tasks, newTask]);

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div>
        <section className='hero'>
          <nav>
            <h2>Welcome administrator</h2>
            <button onClick={handleLogout}> Logout </button>
          </nav>
        </section>

        <MainName />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              <div className='container'>
                <Header
                  title='Order tracker'
                  onAdd={() => setShowAddTask(!showAddTask)}
                  showAdd={showAddTask}
                />
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No orders to show'
                )}
              </div>
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default Hero;
