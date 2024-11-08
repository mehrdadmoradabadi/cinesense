import React, { useState } from "react";
import "./Carousel.css";
import useUpcommingMovies from "../../hooks/useUpcommingMovies";
import { useNavigate } from "react-router-dom";
import ImdbScore from "../ImdbScore";
import { Text } from "@chakra-ui/react";

const Carousel: React.FC = () => {
  const [activeOption, setActiveOption] = useState<number | null>(0); // Default to the first option
  const navigate = useNavigate();
  const handleOptionClick = (index: number) => {
    if (index !== activeOption) setActiveOption(index);
    else navigate(`/movies/${data?.results[index].id}`);
  };
  const { data } = useUpcommingMovies();
  return (
    <section>
      <div className="options" style={{ display: "flex" }}>
        {data?.results.slice(0, 8).map((option, index) => (
          <div
            key={index}
            className={`option ${index === activeOption ? "active" : ""}`}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${option.poster_path})`,
            }}
            onClick={() => handleOptionClick(index)}
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="info">
                <div className="main">
                  {
                    <Text size={"sm"}>
                      {option.title.length > 23
                        ? option.title.slice(0, 23) + "..."
                        : option.title}
                    </Text>
                  }
                </div>
                <div className="sub">
                  {<ImdbScore score={option.vote_average} />}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
