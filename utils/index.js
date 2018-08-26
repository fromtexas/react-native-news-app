export const Capitalize = item => {
  return item.charAt(0).toUpperCase() + item.slice(1);
};

export const submit = (country, category, screen, callback) => {
  if (!category && !country) {
    return screen.setState({
      warning: `Category and country can't be empty. Choose something.`
    });
  }
  if (!category) {
    return screen.setState({
      warning: `Category can't be empty. Choose something.`
    });
  }
  if (!country) {
    return screen.setState({
      warning: `Country can't be empty. Choose something.`
    });
  }

  callback("news");
};
