import DashboardScreen from "./component/Dashboard/DashboardScreen";
import Footer from "./component/footer/Footer";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";

function App() {
  return (
    <div className="App w-[100%] flex items-center justify-center flex-col bg-[#212121]">
      <div className="DashboardScreen flex w-full">
        <DashboardScreen />
      </div>
      <div className="contents-wrapper min-h-screen w-full">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
