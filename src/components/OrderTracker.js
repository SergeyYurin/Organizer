import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './OrderTrackerComponents/Header';
import Footer from './OrderTrackerComponents/Footer';
import About from './OrderTrackerComponents/About';
import MainName from './OrderTrackerComponents/MainName';
import AddTasks from './OrderTrackerComponents/Tasks/AddTasks';
import addTask from './actions/addTask';
import './OrderTracker.css';

const Hero = ({ handleLogout }) => {
  const [showAddTask, setShowAddTask] = useState(false);

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
                {showAddTask && <AddTasks onAdd={addTask} />}
                <p>No orders to show</p>
                {/* <AddOrders /> */}
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
