import DashboardScreen from "./component/Dashboard/DashboardScreen";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";

function App() {
  return (
    <div className="App w-screen flex items-center justify-center flex-col bg-[#212121]">
      <div className="DashboardScreen flex w-full">
        <DashboardScreen />
      </div>
      <div className="contents-wrapper min-h-screen w-full">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
