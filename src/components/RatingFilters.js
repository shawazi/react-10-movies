import React from 'react';
import Form from 'react-bootstrap/Form';
import { useMovie } from '../context/MovieContext';

const Filters = () => {
  const { userVoteThreshold, setUserVoteThreshold, userYear, getData } = useMovie();
  let {url} = useMovie(); 

  const TMDBAPIKEYS = {
    "votes": `&vote_average.gte=${userVoteThreshold || 0}`,
    "year": `&year=${userYear || ""}`,
    "includeVideo": `&include_video=true`,  
  }
  
  const handleRatingFilter = async (e) => {
    e.preventDefault();
    url += `${TMDBAPIKEYS.votes}`;
    await getData(url);
  };

  const handleRatingChange = (e) => {
    setUserVoteThreshold(parseInt(e.target.value));
  };

  return (
    <Form onSubmit={handleRatingFilter}>
      <div className="mb-3 text-light">
        <h6 className="text-end">Filter by Rating</h6>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <Form.Check
            key={value}
            inlinejustify-content-right
            label={value}
            type="radio"
            name="rating"
            id={`rating-${value}`}
            value={value}
            onChange={handleRatingChange}
            checked={userVoteThreshold === value}
          />
        ))}
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
};


export default Filters;
