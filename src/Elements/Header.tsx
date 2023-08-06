import useCountState from "../store";

const Header = () => {
  const { num, toZero } = useCountState((s) => s);

  return (
    <header className="flex items-end mb-8">
      <h1 className="font-extrabold text-2xl mr-3">Notifications</h1>
      <div className="bg-blue text-white font-extrabold mr-auto pl-[14px] pr-4 pt-[6px] pb-1 rounded-lg flex items-center justify-center">
        {num}
      </div>
      <p className="font-extrabold cursor-pointer" onClick={toZero}>
        Mark all as read
      </p>
    </header>
  );
};

export default Header;
