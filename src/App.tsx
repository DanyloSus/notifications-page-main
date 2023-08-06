import Header from "./Elements/Header";
import ListNotifications from "./Elements/ListNotifications";

export default function App() {
  return (
    <main className="bg-white rounded-lg px-8 pt-9 pb-4 max-w-[732px]">
      <Header />
      <ListNotifications />
    </main>
  );
}
