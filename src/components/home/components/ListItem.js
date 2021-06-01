import { ListGroup, ListGroupItem } from 'react-bootstrap'

const ListItem = ({ fungus }) => {
  return (
    <>
      <div className="card mb-4 grow">
        <div className="card-body">
          <a href={fungus.url}>
            <h1>{fungus.title}</h1>
          </a>

          <ListGroup variant="flush">
            <ListGroupItem className="card-details">
              {fungus.description}
            </ListGroupItem>
            <ListGroupItem>
              <a href={fungus.url}>{fungus.url} </a>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </>
  )
}

export default ListItem
