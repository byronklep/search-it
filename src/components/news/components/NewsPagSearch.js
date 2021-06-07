import React, { useState } from 'react'
import { ListGroup, ListGroupItem, Container, Button } from 'react-bootstrap'
import { FaSistrix } from 'react-icons/fa'
import { FiTrendingUp } from 'react-icons/fi'
import ReactPaginate from 'react-paginate'
import '../../home/components/search.css'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const REACT_APP_RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY

const ListCard = (props) => {
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
          <ListGroupItem>
            <Moment format="MM/DD/YYYY">{props.datePublished}</Moment>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  )
}

const NewsPagSearch = () => {
  const [data, setData] = useState([])
  const [isLoaded, setisLoaded] = useState(false)
  const [q, setQ] = useState('')
  const [totalCount, setTotalCount] = useState(1)
  const [currentPage, setcurrentPage] = useState(0)

  const handleFetch = () => {
    fetch(
      `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${q}&pageNumber=${currentPage}&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': REACT_APP_RAPID_API_KEY,
          'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        },
      }
    )
      .then((response) => response.json())
      .then((body) => {
        // console.log(body)
        setData([...body.value])
        setTotalCount(body.totalCount)
        setisLoaded(true)
      })

      .catch((err) => {
        console.error(err)
      })
  }

  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected)
    handleFetch()
  }

  const getTrending = () => {
    fetch(
      'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=10&withThumbnails=false&location=us',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': REACT_APP_RAPID_API_KEY,
          'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        },
      }
    )
      .then((response) => response.json())
      .then((body) => {
        // console.log(body)
        setData([...body.value])
        setTotalCount(body.totalCount)
        setisLoaded(true)
      })

      .catch((err) => {
        console.error(err)
      })
  }

  const handleTrending = () => {
    getTrending()
  }

  return (
    <>
      <section className="search-section">
        <Link to="/">
          <h1 className="text-center mb-5">
            <FaSistrix size={50} />
            Search It!
          </h1>
        </Link>

        <Container>
          <div className="row with-margin">
            <div className="col-lg-12 mb-5">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="Search the news"
                  onChange={(event) => setQ(event.target.value)}
                />
                <span className="input-group-btn">
                  <button
                    className="btn btn-primary btn-lg mr-3 "
                    type="submit"
                    onClick={handleFetch}>
                    <FaSistrix size={28} />
                  </button>
                </span>
                <Button variant="outline-success" onClick={handleTrending}>
                  <FiTrendingUp size={28} />
                </Button>
              </div>
            </div>
          </div>

          {isLoaded ? (
            data.map((item) => {
              return (
                <ListCard
                  url={item.url}
                  title={item.title}
                  description={item.description}
                  key={item.id}
                  date={item.datePublished}
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
              containerClassName={'pag-container'}
              previousLinkClassName={'page'}
              breakClassName={'page'}
              nextLinkClassName={'page'}
              pageClassName={'page'}
              disabledClassNae={'disabled'}
              activeClassName={'pag-active'}
            />
          ) : (
            <div></div>
          )}
        </Container>
      </section>
    </>
  )
}
export default NewsPagSearch
