import React, { useState } from 'react'
import axios from 'axios'
import { Spinner, Container } from 'react-bootstrap'
import ImageListItem from './ImageListItem'
import '../../../App.css'

const ImageSearchContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [q] = useState('')
  const [inputValue, setValue] = useState('')
  const [fungus, setFungus] = useState(inputValue)

  const searchItem = () => {
    const options = {
      method: 'GET',
      url:
        'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
      params: {
        q: fungus,
        pageNumber: '1',
        pageSize: '12',
        autoCorrect: 'true',
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

  return (
    <Container>
      <div className="row m-5">
        <div className="col-md-12">
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-12 col-sm pr-sm-0">
              <input
                type="text"
                name="search"
                placeholder="Search for an image"
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-12 col-sm-auto pl-sm-0">
              <input
                type="submit"
                name="commit"
                value="Search"
                className="btn btn-primary btn-block"
              />
            </div>
          </form>
        </div>
      </div>

      <br />

      <div className="image-container">
        {data.map((fungus, id) => (
          <ImageListItem key={id} fungus={fungus} q={q} />
        ))}
      </div>
    </Container>
  )
}

export default ImageSearchContainer
