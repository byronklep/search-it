import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FaSistrix } from 'react-icons/fa'
import ReactPaginate from 'react-paginate'
import '../../home/components/search.css'
import { Link } from 'react-router-dom'

const REACT_APP_RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY

const ImageCard = (props) => {
  return (
    <>
      <a href={props.url} target="_blank" rel="noreferrer">
        <img
          src={props.url}
          onError={(e) => {
            e.target.src =
              'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
            e.target.onError = null
          }}
          alt={props.title}
          height={200}
          width={250}
          key={props.title}
        />
      </a>
    </>
  )
}

const ImagePagSearch = () => {
  const [data, setData] = useState([])
  const [isLoaded, setisLoaded] = useState(false)
  const [q, setQ] = useState('')
  const [totalCount, setTotalCount] = useState(1)
  const [currentPage, setcurrentPage] = useState(0)

  const handleFetch = () => {
    fetch(
      `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${q}&pageNumber=${currentPage}&pageSize=10&autoCorrect=true`,
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

  return (
    <>
      <div className="row m-5">
        <div className="col-md-12">
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
                    placeholder="Search images"
                    onChange={(event) => setQ(event.target.value)}
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn-primary btn-lg"
                      type="submit"
                      onClick={handleFetch}>
                      <FaSistrix size={28} />
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="image-container">
              {isLoaded ? (
                data.map((item) => {
                  return (
                    <ImageCard
                      key={item.title}
                      url={item.url}
                      title={item.title}
                    />
                  )
                })
              ) : (
                <div></div>
              )}
            </div>
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
        </div>
      </div>
    </>
  )
}

export default ImagePagSearch
