import React from "react";
import cx from "classnames";

const Input = props => {
  const {
    type = "text",
    className,
    value,
    onChange,
    leftTitle,
    ...rest
  } = props;
  return (
    <div className="flex">
      {leftTitle && (
        <span className="bg-gray-300 rounded-l px-1.5 flex justify-center items-center">
          {leftTitle}
        </span>
      )}
      <input
        className={cx(
          "flex-1 rounded-r border-2 border-solid border-gray-300 outline-none p-1 font-base focus:border-gray-400 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed",
          {
            "rounded-l-none": leftTitle,
            "rounded-l": !leftTitle
          },
          className
        )}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Input;
