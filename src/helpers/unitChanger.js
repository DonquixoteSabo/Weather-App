const unitChanger = (unit, temp) => {
  if (unit === 'fahrenheit') {
    const fahrenheit = (temp * 9) / 5 + 32;
    return `${fahrenheit}°F`;
  } else {
    return `${temp}°C`;
  }
};

export default unitChanger;
