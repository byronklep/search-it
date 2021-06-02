import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Moment from 'react-moment'

const NewsListItem = ({ fungus }) => {
  return (
    <>
      <div className="card mb-4 grow">
        <div className="card-body">
          <a href={fungus.url} target="_blank" rel="noreferrer">
            <h1 className="ml-3">{fungus.title}</h1>
          </a>

          <ListGroup variant="flush">
            <ListGroupItem className="card-details">
              <a
                className="text-success"
                href={fungus.url}
                target="_blank"
                rel="noreferrer">
                {fungus.url}
              </a>
            </ListGroupItem>
            <ListGroupItem>{fungus.description}</ListGroupItem>
            <ListGroupItem>
              <Moment format="MM/DD/YYYY">{fungus.datePublished}</Moment>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </>
  )
}

export default NewsListItem
