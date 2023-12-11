import { FC } from "react";

import { Icon } from "./MediaIcon.styled";

// import sprite from "src/assets/sprite.svg";

type PropsMediaIcon = {
  type: "movie" | "tv";
};

const MediaIcon: FC<PropsMediaIcon> = ({ type }) => {
  const iconId = type === "movie" ? "icon-film" : "icon-tv";
  return (
    <Icon>
      <use href={`/src/assets/sprite.svg#${iconId}`} />
    </Icon>
  );
};

export default MediaIcon;