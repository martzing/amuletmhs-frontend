import React from 'react'
import { useSelector } from 'react-redux'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Input,
  Form,
  Row,
  Col,
} from 'reactstrap'

const RewardDetail = ({ isOpen, toggle }) => {
  // const [isCreateReward, setIsCreateReward] = useState(false)

  const { data: rewardList } = useSelector(state => state.getRewardList)

  // const toggleCreateReward = () => {
  //   setIsCreateReward(!isCreateReward)
  // }
  return (
    <div>
      <Modal isOpen={isOpen} size='1000' toggle={toggle} fullscreen='md'>
        <ModalHeader toggle={toggle}>Reward Detail</ModalHeader>
        <ModalBody>
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Image</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                (rewardList) ? rewardList.map((val) => (
                  <tr key={val.id}>
                    <th scope='row'>{val.id}</th>
                    <td>{val.name}</td>
                    <td>{val.RewardType.name}</td>
                    <td><img style={{ maxWidth: '150px' }} alt={val.name} src={val.image} /></td>
                    <td></td>
                  </tr>
                )) : null
              }
            </tbody>
          </Table>
          <Form onSubmit={() => { }}>
            <Row>
              <Col xs="3">
                <Input
                  id="customer_name"
                  name="customer_name"
                  placeholder="Customer Name"
                />
              </Col>
              <Col xs="3" >
                <Input
                  id="customer_name"
                  name="customer_name"
                  placeholder="Customer Name"
                />
              </Col>
              <Col xs="3" >
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                />
              </Col>
              <Col xs="3" >
                <Button outline style={{ marginRight: '5px' }}>Cancel</Button>
                <Button color="primary" outline type='sumit'>Save</Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>CLOSE</Button>
        </ModalFooter>
      </Modal>
    </div >
  )
}

export default RewardDetail
