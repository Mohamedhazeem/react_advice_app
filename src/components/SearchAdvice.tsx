import { useState } from "react";
import { Form } from "react-bootstrap";
import { searchAdviceFetch } from "../lib/fetch";
import { adviceSlip, searchAdvice } from "../App";
type SearchAdviceProps = {
  url: string;
  handleSearchAdvice: (advice: adviceSlip) => void;
};

export const SearchAdvice = ({
  url,
  handleSearchAdvice,
}: SearchAdviceProps) => {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    if (search.length == 0) {
      return;
    }
    searchAdviceFetch(url, search)
      .then((data: searchAdvice) => {
        console.log(data);
        if (data && data.total_results > 0) {
          const totalResultCounts = data.total_results;
          const randomIndex = Math.floor(Math.random() * totalResultCounts);
          const result = data.slips[randomIndex];
          handleSearchAdvice({
            slip: { slip_id: result.id, advice: result.advice },
          });
        } else {
          handleSearchAdvice({
            slip: { slip_id: 0, advice: data?.message?.text },
          });
        }
      })
      .catch((e) => console.log(e));

    setSearch("");
  };

  return (
    <>
      <div>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <Form.Control
            className=""
            value={search}
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
          ></Form.Control>
        </Form>
      </div>
    </>
  );
};
