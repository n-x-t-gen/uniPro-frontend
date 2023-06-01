import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import styles from './Login.module.css';
import useLoginController from '../../controllers/LoginController';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const LoginPage: React.FC = () => {
  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
    loginError,
    loggedIn
  } = useLoginController();

  if (loggedIn) {
    return <Navigate to='/home' />;
  }

  return (
    <div className={styles.loginContent}>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col lg={6} xs={6} style={{ margin: '0px' }}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase">UNIPRODUÇÕES</h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                          Insira seu CPF ou EMAIL
                        </Form.Label>
                        <Form.Control
                          className={styles.inputFieldUser}
                          type="text"
                          value={username}
                          onChange={handleUsernameChange}
                          placeholder='Ex: 12345678910'
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                          className={styles.inputFieldPassword}
                          id='userInput'
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Não consegue entrar?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Entrar
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Não possui conta?{' '}
                        <Link to="/signup" className="text-primary fw-bold">
                          Crie uma
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;