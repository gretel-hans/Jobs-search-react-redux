import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getFetch } from '../redux/actions'
import Job from './Job'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  //const [jobs, setJobs] = useState([])
  const jobs=useSelector((state)=>{
    return state.joblist.list
  })
  const dispatch=useDispatch()

  const navigate = useNavigate()

 // const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  const handleChange = (e) => {
    setQuery(e.target.value)
  }



    const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getFetch(query))
    
  } 



  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Button onClick={() => navigate('/favourites')}>Favourites</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {jobs && (<Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>)}

        
      </Row>
    </Container>
  )
}

export default MainSearch
