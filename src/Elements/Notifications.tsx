import { useState } from "react";
import useCountState from "../store";

interface NotificationsProps {
  img: string;
  name: string;
  time: string;
  type: "react" | "follow" | "join" | "sentMessage" | "comment" | "left";
  isNew: boolean;
  commentImg?: string;
  textMessage?: string;
}

const Notifications = ({
  img,
  name,
  time,
  type,
  isNew = false,
  commentImg,
  textMessage,
}: NotificationsProps) => {
  const [first, setfirst] = useState(isNew);
  const { num, decrease } = useCountState((state) => state);

  const handleChange = () => {
    if (first) {
      setfirst(!first);
      decrease();
    }
  };

  return (
    <div onClick={handleChange}>
      {" "}
      <div
        className={`flex rounded-xl py-4 px-[18px] gap-5 transition-colors sm:text-sm ${
          first && num !== 0
            ? "bg-light-grayish-blue-1 cursor-pointer"
            : "bg-white"
        }`}
      >
        <img src={`./${img}`} alt={img} className="w-11 h-11" />
        <div>
          <div className="inline items-start" id="notif">
            <h2 className="mr-2 whitespace-nowrap inline">{name}</h2>
            {type === "react" ? (
              <p>
                reacted tp your post{" "}
                <span className="font-bold ml-2 sm:ml-1">{textMessage}</span>
              </p>
            ) : type === "follow" ? (
              <p>followed you</p>
            ) : type === "join" ? (
              <p>
                has joined your group{" "}
                <span className="font-bold text-blue cursor-pointer ml-2 sm:ml-1">
                  {textMessage}
                </span>
              </p>
            ) : type === "left" ? (
              <p>
                left the group{" "}
                <span className="font-bold text-blue cursor-pointer ml-2 sm:ml-1">
                  {textMessage}
                </span>
              </p>
            ) : type === "comment" ? (
              <p>commented on your picture</p>
            ) : (
              <p>sent you a private message</p>
            )}
            <div
              className={`bg-red w-2 h-2 transition-opacity ml-2 rounded-full inline-block mb-[2px] ${
                first && num !== 0 ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <p>{time} ago</p>
        </div>
        {type === "comment" && (
          <img
            src={`./${commentImg}`}
            alt={commentImg}
            className="w-11 h-11 ml-auto"
          />
        )}
      </div>
      {type === "sentMessage" && (
        <div className="border border-grayish-blue p-5 rounded-[4px] ml-[72px]">
          <p className="font-bold sm:font-normal sm:text-sm">{textMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;
