const Main = () => {
  const handleClick = () => {
    window.parent.postMessage("Hello, world!", "*");
  };
  return (
    <div>
      <button onClick={handleClick}>22전송</button>
    </div>
  );
};

export default Main;
