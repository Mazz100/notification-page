import "./App.css";
import NotificationComponent from "./NotificationComponent";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-grow flex-col items-center justify-center bg-body-bg font-Plus-Jakara">
        <main className="flex w-full max-w-[30rem] flex-1 flex-col justify-center md:max-w-[36rem] lg:max-w-[52rem]">
          <NotificationComponent />
        </main>

        <footer className="inline-flex w-full justify-center text-balance bg-white p-2 text-center text-sm">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              className="text-blue-700"
            >
              Frontend Mentor
            </a>{" "}
            Coded by{" "}
            <a href="https://github.com/Mazz100" className="text-blue-700">
              Mazen Hassan
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
