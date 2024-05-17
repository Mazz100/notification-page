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

  let usersNotifications = [
    {
      avatar: mark,
      userName: "Mark Webber",
      notification: "reacted to your recent post",
      action: "My first tournament today!",
      time: "1m ago",
      unread: true,
    },
    {
      avatar: angela,
      userName: "Angela Gray",
      notification: "followed you",
      time: "5m ago",
      unread: true,
    },
    {
      avatar: jacob,
      userName: "Jacob Thompson",
      notification: "has joined your group",
      action: "Chess Club",
      time: "1 day ago",
      unread: true,
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
      time: "2 week ago",
    },
    {
      avatar: anna,
      userName: "Anna Kim",
      notification: "left the group",
      action: "Chess Club",
      time: "1 week ago",
    },
  ];

  useEffect(() => {
    const unreadCount = usersNotifications.filter(
      (notification) => notification.unread,
    ).length; // returning unread count from users object
    setNotificationCount(unreadCount);
  }, [notificationCount]);

  return (
    <>
      <div className="mb-4 flex items-center justify-between p-5">
        <h1 className="text-2xl font-bold">
          Notifications
          <span className="mx-2 rounded-lg  bg-notification-count px-3 py-[0.14rem] text-white">
            {notificationCount}
          </span>
        </h1>
        <button
          type="button"
          className="opacity-60 transition-opacity hover:opacity-100"
        >
          Mark all as read
        </button>
      </div>

      {usersNotifications.map((notification) => (
        <div
          key={notification.userName}
          className="mx-5 mb-4 flex items-start rounded-md p-3 last-of-type:mb-0"
          style={
            notification.unread
              ? {
                  backgroundColor: "#f7fafd",
                  marginInline: "1.25rem",
                }
              : null
          }
        >
          <img
            className="mx-3 w-10"
            src={notification.avatar}
            alt={notification.userName}
          />
          <div className="flex w-full flex-wrap items-center">
            <a
              className="mr-1 font-semibold"
              href={`#${notification.userName}`}
            >
              {notification.userName}
            </a>
            <p className="mr-1 opacity-60">{notification.notification}</p>
            {notification.action && (
              <a
                href="#"
                className="font-semibold hover:font-bold hover:text-notificaction-type-hover"
              >
                {notification.action}
              </a>
            )}
            {notification.unread && (
              <div className="mx-1 h-2 w-2 rounded-full bg-unread-color"></div>
            )}
            <div className="w-full">
              <span className="opacity-40">{notification.time}</span>
            </div>
            {notification.message && (
              <p className="mt-3 rounded-md border-2 border-gray-100 p-3">
                {notification.message}
              </p>
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
    </>
  );
};

export default NotificationComponent;
