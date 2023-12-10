import { FC } from "react";

import { Icon } from "./MediaIcon.styled";

import sprite from "src/assets/sprite.svg";

type PropsMediaIcon = {
  type: "movie" | "tv";
};

const MediaIcon: FC<PropsMediaIcon> = ({ type }) => {
  const iconPath = type === "movie" ? sprite + "#icon-film" : sprite + "#icon-tv";
  return (
    <Icon>
      <use href={iconPath}></use>
    </Icon>
  );
};

export default MediaIcon;
