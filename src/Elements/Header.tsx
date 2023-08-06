import useCountState from "../store";

const Header = () => {
  const { num, toZero } = useCountState((s) => s);

  return (
    <header className="flex items-end mb-8">
      <h1 className="font-extrabold text-2xl sm:text-xl mr-3">Notifications</h1>
      <div className="bg-blue text-white font-extrabold mr-auto pl-[14px] pr-4 pt-[2px] pb-[2px] rounded-lg flex items-center justify-center sm:font-normal">
        {num}
      </div>
      <p
        className="font-extrabold cursor-pointer sm:font-normal sm:text-sm"
        onClick={toZero}
      >
        Mark all as read
      </p>
    </header>
  );
};

export default Header;
