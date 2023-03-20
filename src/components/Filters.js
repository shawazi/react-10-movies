import React from 'react';
import Form from 'react-bootstrap/Form';
import { useMovie } from '../context/MovieContext';

const Filters = () => {
  const { userVoteThreshold, setUserVoteThreshold, userYear, getData, url } = useMovie();

  const TMDBAPIKEYS = {
    "votes": `&vote_average.gte=${userVoteThreshold || 0}`,
    "year": `&year=${userYear || ""}`,
    "includeVideo": `&include_video=true`,
  }

  let newURL = url;

  console.log(TMDBAPIKEYS.votes);

  const handleRatingFilter = async (e) => {
    e.preventDefault();
    // console.log(userVoteThreshold);
    newURL += `${TMDBAPIKEYS.votes}`;
    console.log(await getData(newURL));

  };

  const handleChange = (e) => {
    setUserVoteThreshold(parseInt(e.target.value));
  };

  return (
    <Form onSubmit={handleRatingFilter}>
      <div className="mb-3 text-light">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <Form.Check
            key={value}
            inline
            label={value}
            type="radio"
            name="rating"
            id={`rating-${value}`}
            value={value}
            onChange={handleChange}
            checked={userVoteThreshold === value}
          />
        ))}
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
};


export default Filters;
