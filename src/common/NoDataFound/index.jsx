import React from "react";

export const NoDataFound = ({ message, messageContent }) => {
  return (
    <div className="noData-wrapper">
      <img src="/assets/img/noDataFound.png" />
      <div className="noData-message-wrapper">
        <h4 className="noData-message">{message}</h4>
        <p>{messageContent}</p>
      </div>
    </div>
  );
};
