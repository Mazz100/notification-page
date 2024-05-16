import "./App.css";
import NotificationComponent from "./NotificationComponent";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-body-bg font-Plus-Jakara">
        <main className="flex w-full max-w-[30rem] flex-col rounded-md bg-white">
          <NotificationComponent />
        </main>

        <footer></footer>
      </div>
    </>
  );
}

export default App;
