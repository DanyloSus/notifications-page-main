import Notifications from "./Notifications";

const ListNotifications = () => {
  return (
    <section className="flex flex-col gap-2">
      <Notifications
        img="avatar-mark-webber.webp"
        name="Mark Webber"
        type="react"
        textMessage="My first tournament today!"
        time="1m"
        isNew={true}
      />
      <Notifications
        img="avatar-angela-gray.webp"
        name="Angela Gray"
        type="follow"
        time="5m"
        isNew={true}
      />
      <Notifications
        img="avatar-jacob-thompson.webp"
        name="Jacob Thompson"
        type="join"
        textMessage="Chess Club"
        time="1 day"
        isNew={true}
      />
      <Notifications
        img="avatar-rizky-hasanuddin.webp"
        name="Rizky Hasanuddin"
        type="sentMessage"
        textMessage="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
        time="5 days"
        isNew={false}
      />
      <Notifications
        img="avatar-kimberly-smith.webp"
        name="Kimberly Smith"
        type="comment"
        commentImg="image-chess.webp"
        time="1 week"
        isNew={false}
      />
      <Notifications
        img="avatar-nathan-peterson.webp"
        name="Nathan Peterson"
        type="react"
        textMessage="5 end-game strategies to increase your win rate"
        time="2 weeks"
        isNew={false}
      />
      <Notifications
        img="avatar-anna-kim.webp"
        name="Anna Kim"
        type="left"
        textMessage="Chess Club"
        time="2 weeks"
        isNew={false}
      />
    </section>
  );
};

export default ListNotifications;
