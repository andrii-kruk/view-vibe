import { FC } from "react";

import { MediaIcon } from "src/components";
import { Movie } from "src/types";

import { capitalizeFirstLetter, showAgeRating, showOnlyYear } from "src/utils";

import { BackdropImage, Card, CardDetails, CardInfo, DetailsText, Overlay, SeparatedSymbol } from "./TrendCard.styled";

const TrendCard: FC<Movie> = ({ id, backdrop_path, original_title, release_date, media_type, adult }) => {
  const year = showOnlyYear(release_date);
  const capitalizedMediaType = capitalizeFirstLetter(media_type);
  const ageRating = showAgeRating(adult);

  const details = [year, capitalizedMediaType, ageRating];
  return (
    <Card key={id}>
      <BackdropImage src={`https://www.themoviedb.org/t/p/w300/${backdrop_path}`} alt={original_title} />
      <Overlay>
        <CardInfo>
          <CardDetails>
            {details.map((item, index) => (
              <DetailsText key={index}>
                {index === 1 && <MediaIcon type={media_type} />}
                {item}
                {index < details.length - 1 && <SeparatedSymbol>|</SeparatedSymbol>}
              </DetailsText>
            ))}
          </CardDetails>
          <h3>{original_title}</h3>
        </CardInfo>
      </Overlay>
    </Card>
  );
};

export default TrendCard;
