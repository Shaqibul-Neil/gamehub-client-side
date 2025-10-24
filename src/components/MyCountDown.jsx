import React from "react";
import Countdown from "react-countdown";

const MyCountdown = () => {
  const now = Date.now();
  const targetTime =
    now +
    2777 * 24 * 60 * 60 * 1000 + // 10 days
    20 * 60 * 60 * 1000 + // 20 hours
    56 * 60 * 1000; // 56 minutes

  return (
    <div className="flex justify-center items-center">
      <Countdown
        date={targetTime}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="flex gap-2 lg:text-4xl md:text-3xl text-2xl text-success font-semibold">
            <span>{days}d</span>:<span>{hours}h</span>:<span>{minutes}m</span>:
            <span>{seconds}s</span>
          </div>
        )}
      />
    </div>
  );
};

export default MyCountdown;
