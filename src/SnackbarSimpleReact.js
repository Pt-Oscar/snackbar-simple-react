import React, { useState, useEffect } from 'react';
import './styles.css'
import PropTypes from 'prop-types';

const SnackbarSimpleReact = (props) => {
  const {
    text,
    backgroundColor,
    textColor,
    isVisible,
    borderColor,
    classIcon,
    showTime
  } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0) {
      const x = document.getElementById('snackbar-react');
      x.className = 'show-snackbar-react';
      x.style.animation= `fadein 0.5s, fadeout 0.5s ${((showTime/1000) - .5).toString()}s`

      setTimeout(() => {
        x.className = x.className.replace('show-snackbar-react', '');
        x.style.animation = '';
      }, showTime);
    } else {
      setCount(1);
    }
  }, [isVisible]);
  return (
    <div
      id="snackbar-react"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        border: `1px solid ${borderColor}`,
        display: 'flex',
      }}
    >
      <div
        style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}
      >
        {' '}
        <i className={classIcon} style={{ color: borderColor }} />{' '}
      </div>
      <div>{text}</div>
      <div style={{ marginTop: '-7px' }}>
        <i
          onClick={() => {
            const x = document.getElementById('snackbar-react');
            x.style.animation = '';

            x.className = x.className.replace('show-snackbar-react', '');
          }}
          className="fa fa-times"
          style={{ cursor: 'pointer', fontSize: '0.7rem', color: textColor }}
        />
      </div>
    </div>
  );
};

SnackbarSimpleReact.defaultProps = {
  text: 'Ejemplo de texto',
  isVisible: false,
  backgroundColor: '#333',
  textColor: '#fff',
  borderColor: 'white',
  classIcon: 'fa fa-info-circle fa-lg',
  showTime: 6000,
};

SnackbarSimpleReact.propTypes = {
  text: PropTypes.string,
  isVisible: PropTypes.bool,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  classIcon: PropTypes.string,
  showTime: PropTypes.number,
};

export default SnackbarSimpleReact;
