/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { getAllUsers, getAllUserssettings } from '../../redux/actions/getUser.action';
import { appointModeratorThunk, demoteModeratorThunk } from '../../redux/actions/appointModerator.action';

function Settings() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);
  const usersListSettings = useSelector((state) => state.userListSettings);
  const [show, setShow] = useState(false);
  // const [usersListSettings, setUsersListSettings] = useState([]);
  const user = useSelector((state) => state.user) || localStorage.getItem('user');

  useEffect(() => {
    dispatch(getAllUserssettings(user.user_id));
  }, [usersList]);

  console.log('usersListSettings', usersListSettings);

  function appointModerator(user_id) {
    dispatch(appointModeratorThunk({ user_id, initiator_id: JSON.parse(user).user_id }));
  }

  function demoteModerator(user_id) {
    dispatch(demoteModeratorThunk({ user_id, initiator_id: JSON.parse(user).user_id }));
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card><Card.Body><h2>Admin panel</h2></Card.Body></Card>
      {usersListSettings.map((userSetting) => (
        <Card key={userSetting.user_id}>
          <Card.Body className="user-card">
            <Badge className="topic-header" bg="dark">
              <p>Nick:</p>
            </Badge>
            <div className="user-info-value">{userSetting.nick}</div>
            <Badge className="topic-header" bg="dark">
              Role:
            </Badge>
            <div className="user-info-value">{userSetting.role}</div>
            <Badge className="topic-header" bg="dark">
              Status:
            </Badge>
            <div className="user-info-value">{userSetting.status}</div>
            <div className="buttons-for-settings">
              {userSetting.role === 'user' ? (
                <Button onClick={() => appointModerator(userSetting.user_id)} variant="outline-success">
                  Appoint a moderator
                </Button>
              )
                : (
                  <Button onClick={() => demoteModerator(userSetting.user_id)} variant="outline-danger">
                    Demote a moderator
                  </Button>
                )}
              <Button variant="dark" onClick={handleShow}>
                Block user
              </Button>
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Block user</Modal.Title>
              </Modal.Header>
              <Modal.Body>Choose the reason why the user should be blocked:</Modal.Body>
              <Form.Select aria-label="Default select example" className="form-class">
                <option value="1">Disrespectful attitude towards other users</option>
                <option value="2">Thinks angular is better than react</option>
                <option value="3">Doesn`t want to see photos of admin`s dogs</option>
                <option value="3">Other</option>
              </Form.Select>
              <Modal.Body>Select the date before which the user should be blocked:</Modal.Body>
              <input type="date" id="date" name="date" className="form-class" />
              <Modal.Footer>
                <Button variant="outline-dark" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="dark" onClick={handleClose}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      ))}

    </div>
  );
}

export default Settings;
