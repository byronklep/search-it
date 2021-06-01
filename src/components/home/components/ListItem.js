import { ListGroup, ListGroupItem } from 'react-bootstrap'

const ListItem = ({ fungus }) => {
  return (
    <>
      <div className="card mb-4 grow">
        <div className="card-body">
          <a href={fungus.url}>
            <h1 className="ml-3">{fungus.title}</h1>
          </a>

          <ListGroup variant="flush">
            <ListGroupItem className="card-details">
              <a className="text-success" href={fungus.url}>
                {fungus.url}{' '}
              </a>
            </ListGroupItem>
            <ListGroupItem>{fungus.description}</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </>
  )
}

export default ListItem
