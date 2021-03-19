function TodoAdd(props) {
  const { item, handleCompleted } = props;

  return (
    <>
      <label htmlFor={item.id}>
        <li key={item.id}>
          <input
            id={item.id}
            type="checkbox"
            className="check"
            checked={item.completed}
            onChange={() => {
              handleCompleted(item.id);
            }}
          />
          {item.completed ? <del>{item.text}</del> : item.text}
        </li>
      </label>
    </>
  );
}

export default TodoAdd;
