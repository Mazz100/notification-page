import React, { useEffect, useState } from "react";
import mark from "./assets/images/avatar-mark-webber.webp";
import angela from "./assets/images/avatar-angela-gray.webp";
import jacob from "./assets/images/avatar-jacob-thompson.webp";
import rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import kimberly from "./assets/images/avatar-kimberly-smith.webp";
import nathan from "./assets/images/avatar-nathan-peterson.webp";
import anna from "./assets/images/avatar-anna-kim.webp";
import chess from "./assets/images/image-chess.webp";

const NotificationComponent = () => {
  const [notificationCount, setNotificationCount] = useState(0);
  const [userNotifications, setUserNotifcations] = useState([
    {
      avatar: mark,
      userName: "Mark Webber",
      notification: "reacted to your recent post",
      action: "My first tournament today!",
      time: "1m ago",
      isRead: true,
    },
    {
      avatar: angela,
      userName: "Angela Gray",
      notification: "followed you",
      time: "5m ago",
      isRead: true,
    },
    {
      avatar: jacob,
      userName: "Jacob Thompson",
      notification: "has joined your group",
      action: "Chess Club",
      time: "1 day ago",
      isRead: true,
    },
    {
      avatar: rizky,
      userName: "Rizky Hasanuddin",
      notification: "sent you a private message",
      time: "5 days ago",
      message:
        " Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
      avatar: kimberly,
      userName: "Kimberly Smith",
      notification: "commented on your picture",
      time: "1 week ago",
      picture: chess,
    },
    {
      avatar: nathan,
      userName: "Nathan Peterson",
      notification: "reacted to your recent post",
      action: "5-end-game strategies to increase your win rate",
      time: "2 weeks ago",
    },
    {
      avatar: anna,
      userName: "Anna Kim",
      notification: "left the group",
      action: "Chess Club",
      time: "2 weeks ago",
    },
  ]);

  function removeisRead() {
    setUserNotifcations((prevNotifications) => {
      return prevNotifications.map((notification) => {
        delete notification.isRead;
        return notification;
      });
    });

    setNotificationCount(0);
  }

  useEffect(() => {
    const isReadCount = userNotifications.filter(
      (notification) => notification.isRead,
    ).length; // returning isRead length from users object
    setNotificationCount(isReadCount);
  }, [notificationCount]);

  return (
    <>
      <div className="rounded-lg bg-white shadow-sm">
        <div className="mb-4 flex items-center justify-between p-6">
          <h1 className="text-2xl font-bold">
            Notifications
            <span className="mx-2 rounded-lg  bg-notification-count px-3 py-[0.14rem] text-white">
              {notificationCount}
            </span>
          </h1>
          <button
            type="button"
            className="opacity-60 transition-opacity hover:opacity-100"
            onClick={removeisRead}
          >
            Mark all as read
          </button>
        </div>

        {userNotifications.map((notification) => (
          <div
            key={notification.userName}
            className="mx-5 mb-4 flex translate-x-0 items-start rounded-md p-3 last-of-type:mb-0"
            style={
              notification.isRead
                ? {
                    backgroundColor: "#f7fafd",
                  }
                : {
                    transition: "all 1s ease",
                    backgroundColor: "transparent",
                  }
            }
          >
            <img
              className="mx-3 w-10"
              src={notification.avatar}
              alt={notification.userName}
            />
            <div className="flex w-full flex-wrap items-center">
              <a
                className="mr-1 font-semibold hover:text-notificaction-hover"
                href={`#${notification.userName}`}
              >
                <p>{notification.userName}</p>
              </a>
              <p className="mr-1 opacity-60">{notification.notification}</p>
              {notification.action && (
                <a
                  href="#"
                  className="font-semibold hover:font-black hover:text-notificaction-hover"
                >
                  <p>{notification.action}</p>
                </a>
              )}
              {notification.isRead && (
                <div
                  className="mx-1 h-2 w-2 scale-100 rounded-full bg-isRead-color opacity-100"
                  aria-label="Unread notification"
                ></div>
              )}
              <div className="w-full">
                <span className="opacity-60">{notification.time}</span>
              </div>
              {notification.message && (
                <a
                  href="#"
                  className="mt-3 rounded-md border-[1px] p-5 transition-colors duration-150 ease-out hover:border-[#e5eff9] hover:bg-message-bg-hover"
                >
                  <p>{notification.message}</p>
                </a>
              )}
            </div>
            <div>
              {notification.picture && (
                <a href="#">
                  <img
                    className="max-w-12"
                    src={notification.picture}
                    alt={notification.picture}
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotificationComponent;
