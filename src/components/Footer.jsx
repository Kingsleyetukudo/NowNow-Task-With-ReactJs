import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-center mobile:flex mobile:flex-col pb-2">
      <p className="text-sm mobile:text-xs">
        Copyright 2023 NowNow All Right Reserved.
      </p>
      <span className="text-blue-500 text-center mobile:text-xs">
        Privacy-Policy Terms of use
      </span>
    </div>
  );
}
