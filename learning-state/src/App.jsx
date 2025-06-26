import "./App.css";
import { useState } from "react";

// 함수명을 영상의 'Form'에서 'App'으로 수정했습니다.
function App() {
  const [username, setUsername] = useState("");
  const [isSubscribed, setSubscribed] = useState(false);
  const [role, setRole] = useState("user");
  const roles = ["user", "admin", "guest"];

  return (
    <form>
      <p>
        Name: {username}
        {isSubscribed && " (Subscribed)"}
      </p>
      <p>Role: {role}</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="checkbox"
        checked={isSubscribed}
        onChange={(e) => setSubscribed(e.target.checked)}
      />
      <label>Subscribe</label>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </form>
  );
}

export default App;
