import { Container } from 'react-bootstrap'

const ListItem = ({ fungus }) => {
  return (
    <>
      <Container className="image-search">
        <a href={fungus.url}>
          <img
            src={fungus.url}
            onError={(e) => {
              e.target.src =
                'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
              e.target.onError = null
            }}
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
