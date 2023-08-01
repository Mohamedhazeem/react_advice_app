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
  const [searchResult, setSearchResult] = useState<searchAdvice>();

  const handleSearch = () => {
    if (search.length == 0){console.log("FUCK"); return;}
    searchAdviceFetch(url, search)
      .then((data: searchAdvice) => {console.log(data); setSearchResult(data);})
      .catch((e) => console.log(e));
    console.log(searchResult)
    if(searchResult && searchResult.total_results > 0){
        const totalResultCounts = searchResult.total_results;
        const randomIndex = Math.floor(Math.random() * totalResultCounts);
        const result = searchResult.slips[randomIndex]
        handleSearchAdvice({
            slip: { slip_id: randomIndex, advice: result.advice },
          })
    }else{
        handleSearchAdvice({
            slip: { slip_id: 0, advice: searchResult!.message!.text },
          })
    }
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
            onChange={(e) =>{
                e.preventDefault();
                setSearch(e.target.value);
            }}
          ></Form.Control>
        </Form>
      </div>
    </>
  );
};
