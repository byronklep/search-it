import { ListGroup, ListGroupItem } from 'react-bootstrap'

const ListItem = ({ results, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      {results.map((r) => (
        <div key={r.id} className="card mb-4 grow">
          <div className="card-body">
            <a href={r.url} target="_blank" rel="noreferrer">
              <h1 className="ml-3">{r.title}</h1>
            </a>

            <ListGroup variant="flush">
              <ListGroupItem className="card-details">
                <a
                  className="text-success"
                  href={r.url}
                  target="_blank"
                  rel="noreferrer">
                  {r.url}
                </a>
              </ListGroupItem>
              <ListGroupItem>{r.description}</ListGroupItem>
            </ListGroup>
          </div>
        </div>
      ))}
    </>
  )
}

export default ListItem
