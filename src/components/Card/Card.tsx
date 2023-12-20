import { FC } from "react";

import { MediaIcon } from "src/components";
import { Movie } from "src/types";

import { capitalizeFirstLetter, showAgeRating, showOnlyYear } from "src/utils";

const Card: FC<Movie> = ({ id, backdrop_path, original_title, media_type, release_date, adult }) => {
  const year = showOnlyYear(release_date);
  const capitalizedMediaType = capitalizeFirstLetter(media_type);
  const ageRating = showAgeRating(adult);

  const details = [year, capitalizedMediaType, ageRating];

  return (
    <li key={id}>
      <img src={`https://www.themoviedb.org/t/p/w300/${backdrop_path}`} alt={original_title} />
      <div>
        <div>
          <div>
            {details.map((item, index) => (
              <p key={index}>
                {index === 1 && <MediaIcon type={media_type} />}
                {item}
                {index < details.length - 1 && <span>|</span>}
              </p>
            ))}
          </div>
          <h3>{original_title}</h3>
        </div>
      </div>
    </li>
  );
};

export default Card;
