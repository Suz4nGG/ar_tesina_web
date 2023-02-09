const ErrorMessages = ({ errors, show, styles = "yellow" }) => {
  return (
    <>
      {show ? (
        <p className={`px-4 py-4 ${styles} my-4 rounded`}>{errors}</p>
      ) : (
        ""
      )}
    </>
  );
};

export default ErrorMessages;
