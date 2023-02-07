export const timeOut = (time, setFunction) => {
  const timer = setTimeout(() => {
    setFunction;
  }, time);
  return () => clearTimeout(timer);
};
