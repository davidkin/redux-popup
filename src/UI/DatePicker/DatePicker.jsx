import React, { useState } from 'react';
import styles from './DatePicker.module.scss';
import LeftIcon from '../../static/svg/flat-arrow-l.svg';
import RightIcon from '../../static/svg/flat-arrow-r.svg';
import cx from 'classnames';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const WEEKDAYS_LONG = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];
const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

function Navbar({ onPreviousClick, onNextClick, className }) {
  const styleLeft = {
    float: 'left',
    position: 'relative',
    left: '20px',
    top: '20px',
  };
  const styleRight = {
    float: 'right',
    position: 'relative',
    right: '20px',
    top: '20px',
  };

  return (
    <div className={className}>
      <button style={styleLeft} onClick={() => onPreviousClick()}>
        <img src={LeftIcon} alt="left" />
      </button>
      <button style={styleRight} onClick={() => onNextClick()}>
        <img src={RightIcon} alt="right" />
      </button>
    </div>
  );
}

const DatePicker = ({
  classNameWrapper,
  classNameDate,
  value,
  onChange,
  numberOfMonths = 1,
  closeDataPicker,
}) => {
  const [selectedDay, setSelectedDay] = useState(value ? value : null);

  const moveToTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);

    onChange(tomorrow);
  };

  const modifiers = {
    saturday: { daysOfWeek: [6] },
    sunday: { daysOfWeek: [0] },
  };

  return (
    <div className={cx(styles.customDatePicker, classNameWrapper)}>
      <div className={cx(styles.datePickerWrapper, classNameDate)}>
        <DayPicker
          locale="ru"
          selectedDays={selectedDay}
          numberOfMonths={numberOfMonths}
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          firstDayOfWeek={1}
          weekdaysShort={WEEKDAYS_SHORT}
          onDayClick={(day) => {
            onChange(day);
            setSelectedDay(day);
            closeDataPicker();
          }}
          modifiers={modifiers}
          navbarElement={<Navbar />}
          todayButton="Сегодня"
          onTodayButtonClick={(day) => onChange(day)}
        />
        <button className={styles.tomorrowBtn} onClick={moveToTomorrow}>
          Завтра
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
