import { useParams } from "react-router-dom";

function File() {
  const params = useParams();

  return (
    <div>
      <h1>File Page</h1>
      <h2>Splat Value:</h2>

      <p>{params["*"]}</p>
    </div>
  );
}

export default File;