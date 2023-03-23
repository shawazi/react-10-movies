import React from "react";
import Form from "react-bootstrap/Form";
import { useMovie } from "../context/MovieContext";

const Filters = () => {
  const {
    userVoteThreshold,
    setUserVoteThreshold,
    userYear,
    setUserYear,
    getData,
  } = useMovie();
  let { url } = useMovie();

  const TMDBAPIKEYS = {
    votes: `&vote_average.gte=${userVoteThreshold || 0}`,
    year: `&year=${userYear || ""}`,
    includeVideo: `&include_video=true`,
    sortDescPop: "&sort_by=popularity.desc",
  };

  const handleRatingChange = (e) => {
    setUserVoteThreshold(parseInt(e.target.value));
  };

  const handleRatingFilter = async (e) => {
    e.preventDefault();
    let ratingURL = url;
    ratingURL += `${TMDBAPIKEYS.votes}`;
    await getData(ratingURL);
  };

  const handleYearChange = (e) => {
    setUserYear(parseInt(e.target.value));
  };

  const handleYearFilter = async (e) => {
    e.preventDefault();
    url += `${TMDBAPIKEYS.year}${TMDBAPIKEYS.sortDescPop}`;
    console.log(url);
    await getData(url);
  };

  // const handleRatingAndYear = async (e) => {
  //   e.preventDefault();
  //   url = `${url}${TMDBAPIKEYS.votes}${TMDBAPIKEYS.year}`;

  // }

  const yearArr = [];
  for (let i = new Date().getFullYear(); i >= 1940; i--) {
    yearArr.push(i);
  }
  // console.log(yearArr);

  return (
    <div>
      <Form className="d-flex flex-column gap-2 align-items-center w-25" onSubmit={handleYearFilter}>
        <Form.Control as="select" onChange={handleYearChange}>
          <option value="">Filter by Year</option>
          {yearArr.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Form.Control>
        <button className="px-2 bg-dark text-light rounded" type="submit" >
            Submit
        </button>
      </Form>
      <Form onSubmit={handleRatingFilter}>
        <div className="mb-3 text-light">
          <h6 className="text-end">Filter by Rating</h6>
        </div>
        <div className="d-flex text-light mb-3 justify-content-end">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <Form.Check
              key={value}
              inline="true"
              label={value}
              type="radio"
              name="rating"
              id={`rating-${value}`}
              value={value}
              onChange={handleRatingChange}
              checked={userVoteThreshold === value}
            />
          ))}
          <button className="px-2 bg-dark text-light rounded" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Filters;
