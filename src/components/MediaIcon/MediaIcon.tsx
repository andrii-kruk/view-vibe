import { FC } from "react";

import { Icon } from "./MediaIcon.styled";


type PropsMediaIcon = {
  type: "movie" | "tv";
};

const MediaIcon: FC<PropsMediaIcon> = ({ type }) => {
  const iconId = type === "movie" ? "icon-film" : "icon-tv";
  return (
    <Icon>
      <use href={`/view-vibe/src/assets/sprite.svg#${iconId}`} />
    </Icon>
  );
};

export default MediaIcon;