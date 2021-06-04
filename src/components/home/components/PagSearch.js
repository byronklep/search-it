import React, { useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import './search.css'

const SearchCard = (props) => {
  return (
    <div className="card mb-4 grow">
      <div className="card-body">
        <a href={props.url} target="_blank" rel="noreferrer">
          <h1 className="ml-3">{props.title}</h1>
        </a>

        <ListGroup variant="flush">
          <ListGroupItem className="card-details">
            <a
              className="text-success"
              href={props.url}
              target="_blank"
              rel="noreferrer">
              {props.url}
            </a>
          </ListGroupItem>
          <ListGroupItem>{props.description}</ListGroupItem>
        </ListGroup>
      </div>
    </div>
  )
}

const PagSearch = () => {
  const [data, setData] = useState([])
  const [isLoaded, setisLoaded] = useState(false)
  const [q, setQ] = useState('')
  const [totalCount, setTotalCount] = useState(1)
  const [currentPage, setcurrentPage] = useState(0)

  //   const URL = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${q}&pageNumber=${currentPage}&pageSize=10&autoCorrect=true,`

  const handleFetch = () => {
    fetch(
      `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${q}&pageNumber=${currentPage}&pageSize=10&autoCorrect=true`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
          'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        },
      }
    )
      .then((response) => response.json())
      .then((body) => {
        console.log(body.value)
        setData([...body.value])
        setTotalCount(body.totalCount)
        setisLoaded(true)
      })

      .catch((err) => {
        console.error(err)
      })
    // fetch(URL, {
    //   method: 'GET',
    //   headers: {
    //     'x-rapidapi-key': 'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
    //     'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    //   },
    // })
    //   .then(function (response) {
    //     setData(response)
    //     setPageNumber(response)
    //     setisLoaded(true)
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.error(error)
    //   })
  }

  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected)
    handleFetch()
  }

  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={(event) => setQ(event.target.value)} />
      <button onClick={handleFetch}>Search</button>

      {isLoaded ? (
        data.map((item) => {
          return (
            <SearchCard
              url={item.url}
              title={item.title}
              description={item.description}
              key={item.id}
            />
          )
        })
      ) : (
        <div></div>
      )}
      {isLoaded ? (
        <ReactPaginate
          totalCount={totalCount}
          pageRange={2}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={'container'}
          previousLinkClassName={'page'}
          breakClassName={'page'}
          nextLinkClassName={'page'}
          pageClassName={'page'}
          disabledClassNae={'disabled'}
          activeClassName={'active'}
        />
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default PagSearch
