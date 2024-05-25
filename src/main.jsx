import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { VideoProvider } from "./context/videoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <VideoProvider>
    <App />
  </VideoProvider>
);