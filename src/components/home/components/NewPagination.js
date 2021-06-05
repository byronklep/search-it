import React, { useState } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { FaSistrix } from 'react-icons/fa'
// import ReactPaginate from 'react-paginate'
import './search.css'
import ListItem from './ListItem'
import Pagination from './Pagination'

const PagSearch = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [q, setQ] = useState('')
  const [currentPage, setcurrentPage] = useState(1)
  const [resultsPerPage, setResultsPerPage] = useState(10)

  const handleFetch = () => {
    const options = {
      method: 'GET',
      url:
        'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
      params: {
        q: q,
        pageNumber: '1',
        pageSize: resultsPerPage,
        autoCorrect: 'true',
      },
      headers: {
        'x-rapidapi-key': 'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
      },
    }

    const fetchResults = async () => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.value)
          setResults(response.data.value)
          setLoading(false)
        })
        .catch(function (error) {
          console.error(error)
        })
    }
    fetchResults()
  }

  // Get current results
  const indexOfLastResult = currentPage * resultsPerPage
  const indexOfFirstResult = indexOfLastResult - resultsPerPage
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult)

  return (
    <section className="search-section">
      <h1 className="text-center mb-5">Search It!</h1>
      <Container>
        <div className="row with-margin">
          <div className="col-lg-12 mb-5">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control input-lg"
                placeholder="Search the web"
                onChange={(event) => setQ(event.target.value)}
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-primary btn-lg"
                  type="submit"
                  onClick={handleFetch}>
                  <FaSistrix />
                </button>
              </span>
            </div>
          </div>
        </div>

        <ListItem results={currentResults} loading={loading} />
      </Container>
      <Pagination
        resultsPerPage={resultsPerPage}
        totalResults={currentResults.length}
      />
    </section>
  )
}

export default PagSearch
