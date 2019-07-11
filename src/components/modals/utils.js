export function handleChange(e) {
  const target = e.target;
  const value = target.value;
  const name = target.name;
  this.setState({
    [name]: value
  });
}

export function validatePrice(values) {
  let status = true;
  Object.keys(values).map((key, index) => {
    const regEx = /^[0-9.,]*$/;
    if (!regEx.test(values[key]) || values[key] < 1) status = false;
  });
  return status;
}
