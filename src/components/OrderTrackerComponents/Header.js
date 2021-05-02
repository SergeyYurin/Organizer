import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
      </header>
      <div style={{ textAlign: 'right' }}>
        <Button
          style={{ display: 'inline-block' }}
          color={showAdd ? 'rgb(208, 68, 68)' : 'rgb(92, 184, 92)'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS styling example in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
