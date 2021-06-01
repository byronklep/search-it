import { Container } from 'react-bootstrap'

const ListItem = ({ fungus }) => {
  return (
    <>
      <Container className="image-search">
        <a href={fungus.url}>
          <img
            src={fungus.thumbnail}
            alt={fungus.title}
            height={200}
            width={250}
          />
        </a>
      </Container>
    </>
  )
}

export default ListItem
