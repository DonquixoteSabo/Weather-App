const unitChanger = (unit, temp) => {
  if (unit === 'fahrenheit') {
    let fahrenheit = (temp * 9) / 5 + 32;
    fahrenheit = fahrenheit.toFixed();
    return `${fahrenheit}°F`;
  } else {
    return `${temp}°C`;
  }
};

export default unitChanger;
