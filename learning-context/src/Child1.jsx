import Child2 from "./Child2";

function Child1({ count, setCount }) {
  return (
    <div>
      <h2>Child1</h2>
      <Child2 count={count} setCount={setCount} />
    </div>
  );
}

export default Child1;
