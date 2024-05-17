import "./App.css";
import NotificationComponent from "./NotificationComponent";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-body-bg font-Plus-Jakara">
        <main className="flex w-full max-w-[30rem] flex-col rounded-md bg-white md:max-w-[36rem] lg:max-w-[52rem]">
          <NotificationComponent />
        </main>

        <footer></footer>
      </div>
    </>
  );
}

export default App;
