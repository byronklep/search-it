import { ListGroup, ListGroupItem } from 'react-bootstrap'

const ListItem = ({ fungus }) => {
  return (
    <>
      <div className="card m-4">
        <div className="card-body">
          <a href={fungus.url}>
            <h1>{fungus.title}</h1>
          </a>

          <ListGroup>
            <ListGroupItem>
              <a href={fungus.url}>{fungus.url} </a>
            </ListGroupItem>
            <ListGroupItem>{fungus.description}</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </>
  )
}

export default ListItem
