import Header from "./Elements/Header";
import ListNotifications from "./Elements/ListNotifications";

export default function App() {
  return (
    <main className="bg-white rounded-lg px-8 sm:px-4 sm:pt-6 pt-9 pb-4 sm:pb-10 max-w-[732px] sm:max-w-screen overflow-x-hidden shadow-2xl my-[62px]">
      <Header />
      <ListNotifications />
    </main>
  );
}
