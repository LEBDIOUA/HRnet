import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function DatePickerInput({ elementClassName, onSelect, isWrong, reset, tabIndex, id }) {
  const [startDate, setStartDate] = useState(null);
  const [className, setClassName] = useState(elementClassName);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    if (isWrong) setClassName(elementClassName + " " + elementClassName + "-err");
    else setClassName(elementClassName);
  }, [elementClassName, isWrong]);

  useEffect(() => {
    if (isChange) {
      if (!startDate && !reset) {
        setClassName(elementClassName + " " + elementClassName + "-err");
      }
    }
    else{
      onSelect(startDate);
    }

    if (startDate) {
      onSelect(startDate);
      setClassName(elementClassName);
    } else {
      onSelect(null);
    }

    if (reset) {
      setStartDate(null);
      setIsChange(false);
    }
  }, [elementClassName, isChange, onSelect, reset, startDate]);

  const maxDate = () => {
    const today = new Date();
    if (id !== "birthDate") {
      return null;
    }
    const year = today.getFullYear() - 18;
    const month = today.getMonth();
    const day = today.getDate();
    return new Date(year, month, day);
  };

  return (
    <DatePicker
      toggleCalendarOnIconClick
      showIcon
      dateFormat="dd/MM/yyyy"
      onChange={(date) => {
        setStartDate(date);
        setIsChange(true);
      }}
      selected={startDate}
      placeholderText="Select a date"
      className={className}
      tabIndex={tabIndex}
      maxDate={maxDate()}
    />
  );
}

DatePickerInput.propTypes = {
  elementClassName: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  reset: PropTypes.bool,
  isWrong: PropTypes.bool,
  tabIndex: PropTypes.number.isRequired,
  id: PropTypes.string,
};

export default DatePickerInput;
