import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TrendCard from "./TrendCard/TrendCard";

import { fetchTrending } from "src/http/movies-api";
import { Movie, MovieResponse } from "src/types";

import { TrendsList } from "./Trends.styled";

const Trends: FC = () => {
  const [trends, setTrends] = useState<MovieResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTrending();
        setTrends(response.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <TrendsList>
      {trends
        .slice(0, 5)
        .map(
          ({
            adult,
            backdrop_path,
            id,
            media_type,
            original_title,
            original_name,
            release_date,
            first_air_date,
          }: Movie) => (
            <Link to={`/movie/${id}`}>
              <TrendCard
                key={id}
                adult={adult}
                backdrop_path={backdrop_path}
                id={id}
                media_type={media_type}
                original_title={original_name || original_title}
                release_date={release_date || first_air_date || "Unknown"}
              />
            </Link>
          )
        )}
    </TrendsList>
  );
};

export default Trends;
