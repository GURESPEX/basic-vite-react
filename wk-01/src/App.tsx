import ToDoListPage from "@pages/ToDoListPage";
import Navigation from "@components/Navigation";

function App() {
  return (
    <>
      <div className="flex flex-row justify-center bg-slate-200 h-screen overflow-hidden">
        <div className="container flex flex-col bg-slate-100 drop-shadow-sm">
          <Navigation />
          <main className="flex flex-col gap-4 p-4 overflow-hidden">
            <ToDoListPage />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
