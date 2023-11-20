import { useRoutes } from "react-router-dom"
import "./App.css"
import routes from "./routes"

function App() {
  const element = useRoutes(routes)
  return <div className="App w-screen h-screen bg-gray-100">{element}</div>
}

export default App
