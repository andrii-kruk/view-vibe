import { FC } from "react";
import sprite from "src/assets/sprite.svg";

import { Icon } from "./MediaIcon.styled";

type PropsMediaIcon = {
  type: "movie" | "tv" | "Unknown";
};

const MediaIcon: FC<PropsMediaIcon> = ({ type }) => {
  const iconId = type === "movie" ? "icon-film" : "icon-tv";
  return (
    type !== "Unknown" && (
      <Icon>
        <use href={sprite + `#${iconId}`} />
      </Icon>
    )
  );
};

export default MediaIcon;
