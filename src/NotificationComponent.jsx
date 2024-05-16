import React, { useState } from "react";
import mark from "./assets/images/avatar-mark-webber.webp";
import angela from "./assets/images/avatar-angela-gray.webp";
import jacob from "./assets/images/avatar-jacob-thompson.webp";
import rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import kimberly from "./assets/images/avatar-kimberly-smith.webp";
import nathan from "./assets/images/avatar-nathan-peterson.webp";
import anna from "./assets/images/avatar-anna-kim.webp";
import chess from "./assets/images/image-chess.webp";

const NotificationComponent = () => {
  const [notification, setNotification] = useState();

  const usersNotifications = [
    {
      avatar: mark,
      userName: "Mark Webber",
      notification: "reacted to your recent post",
      action: "My first tournament today!",
      time: "1m ago",
    },
    {
      avatar: angela,
      userName: "Angela Gray",
      notification: "followed you",
      time: "5m ago",
    },
    {
      avatar: jacob,
      userName: "Jacob Thompson",
      notification: "has joined your group",
      action: "Chess Club",
      time: "1 day ago",
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

  return (
    <>
      <div className="flex items-center justify-between p-3">
        <h1 className="text-2xl font-bold">
          Notifications
          <span className="mx-2 rounded-lg  bg-notification-count px-3 py-1 text-white">
            3
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
          className="mb-4 flex items-start p-4 last-of-type:mb-0"
        >
          <img
            className="mx-3 w-10"
            src={notification.avatar}
            alt={notification.userName}
          />
          <div className="flex flex-wrap">
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
                className="hover:text-notificaction-type-color font-semibold hover:font-bold"
              >
                {notification.action}
              </a>
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
      ))}
    </>
  );
};

export default NotificationComponent;
