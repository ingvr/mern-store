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

export function validateEmail(email) {
  const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return regEx.test(String(email).toLowerCase());
}
