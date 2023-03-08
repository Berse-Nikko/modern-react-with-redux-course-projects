import { CarForm, CarList, CarValue, CarSearch } from "./components"

const App = () => {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}
export default App
