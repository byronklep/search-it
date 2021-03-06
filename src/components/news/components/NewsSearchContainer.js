import React, { useState } from 'react'
import axios from 'axios'
import { Spinner, Container, Button } from 'react-bootstrap'
import ImageListItem from './NewsListItem'
import '../../../App.css'

const NewsSearchContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [q] = useState('')
  const [inputValue, setValue] = useState('')
  const [fungus, setFungus] = useState(inputValue)

  const searchItem = () => {
    const options = {
      method: 'GET',
      url:
        'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
      params: {
        q: fungus,
        pageNumber: '1',
        pageSize: '10',
        autoCorrect: 'true',
        fromPublishedDate: 'null',
        toPublishedDate: 'null',
      },
      headers: {
        'x-rapidapi-key': 'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
      },
    }
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.value)
        console.log(response.data.value)
        setLoading(false)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  if (loading) {
    return <Spinner animation="grow" variant="info" />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFungus(inputValue)
    searchItem()
  }

  const getTrending = () => {
    const options = {
      method: 'GET',
      url:
        'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI',
      params: {
        pageNumber: '1',
        pageSize: '10',
        withThumbnails: 'false',
        location: 'us',
      },
      headers: {
        'x-rapidapi-key': 'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.value)
        console.log(response.data.value)
        setLoading(false)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  const handleTrending = () => {
    getTrending()
  }

  return (
    <Container>
      <div className="row m-5">
        <div className="col-md-12">
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-12 col-sm pr-sm-0">
              <input
                type="text"
                name="search"
                placeholder="Search news"
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-12 col-sm-auto pl-sm-0 d-flex">
              <input
                type="submit"
                name="commit"
                value="Search"
                className="btn btn-primary btn-block mr-2"
              />
              <Button variant="outline-success" onClick={handleTrending}>
                Trending
              </Button>
            </div>
          </form>
        </div>
      </div>

      <br />

      <div className="cards">
        {data.map((fungus, id) => (
          <ImageListItem key={id} fungus={fungus} q={q} />
        ))}
      </div>
    </Container>
  )
}

export default NewsSearchContainer
