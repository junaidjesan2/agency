const GlobalHOC = (RegisteredData) => {
  //   const loginValue = localStorage.getItem("registerValue");
  if (typeof window !== "undefined") {
    const value = JSON.parse(localStorage.getItem("registerValue"));
    return (props) => {
      return <RegisteredData {...props} value={value} />;
    };
  }
};
export default GlobalHOC;
