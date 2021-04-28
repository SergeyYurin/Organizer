import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add an order');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <input
        className='form-control'
        type='text'
        placeholder='Add order'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        className='form-control'
        type='text'
        placeholder='Add day and time'
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />

      <div class='checkbox'>
        <label>
          <input
            className='form-control form-control-check'
            type='checkbox'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
          Set reminder
        </label>
      </div>

      <button
        type='submit'
        value='Save order'
        className='btn-primary'
        color='red'
      >
        Save Order
      </button>
    </form>
  );
};

export default AddTask;
