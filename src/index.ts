const logspot = (): void => {
  const clog: () => void = console.log;
  console.log = (...logArgs: []): void => {
    clog.apply(console, logArgs);
    alert(JSON.stringify(logArgs));
  };
};

export default logspot