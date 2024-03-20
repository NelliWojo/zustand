import { useState } from "react";

function App() {
  const [count] = useState(0);

  return <OtherComponent count={count} />;
}

const OtherComponent = ({ count }: { count: number }) => {
  return <div>{count}</div>;
};

export default App;
