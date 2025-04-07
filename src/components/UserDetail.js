/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { userService } from '../services/userService';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const data = await userService.getUserById(id);
      setUser(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch user details');
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!user) return <Alert variant="warning">User not found</Alert>;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h3 className="mb-0">User Details</h3>
          <div>
            <Button 
              variant="warning" 
              className="me-2"
              onClick={() => navigate(`/users/edit/${id}`)}
            >
              Edit
            </Button>
            <Button 
              variant="secondary"
              onClick={() => navigate('/users')}
            >
              Back to List
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-md-6">
              <h5>Personal Information</h5>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
            </div>
            <div className="col-md-6">
              <h5>Company Information</h5>
              <p><strong>Company Name:</strong> {user.company.name}</p>
              <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
              <p><strong>Business:</strong> {user.company.bs}</p>
            </div>
          </div>
          <div className="mt-4">
            <h5>Address</h5>
            <p>
              {user.address.street}, {user.address.suite}<br />
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserDetail;

