export function handleChange(e) {
  const target = e.target;
  const value = target.value;
  const name = target.name;
  this.setState({
    [name]: value
  });
}

export function validatePrice(...values) {
  const status = values.some(value => {
    return isNaN(value) || value < 0;
  });
  return !status;
}
