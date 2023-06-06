import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import EventController from '../../controllers/EventController';
import styles from './CreateEventBox.module.css';
import { useNavigate } from 'react-router-dom';

const CreateEventBox: React.FC = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState(1);
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate(); // Obter a função de navegação

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const eventData = {
      name,
      state,
      date,
      location,
      description,
    };

    await EventController.createEvent(eventData); // Chamar o método createEvent sem o parâmetro navigate
    navigate('/admin-area/events'); // Navegar para o endpoint após a requisição bem-sucedida
  };
  return (
    <Form onSubmit={handleSubmit} className={styles.CreateEventBoxContainer}>
      <Form.Group controlId="eventName">
        <Form.Label>Nome do Evento</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="eventState">
        <Form.Label>Evento ativo?</Form.Label>
        <Form.Check
          type="switch"
          id="stateSwitch"
          label={state === 1 ? 'Ativo' : 'Inativo'}
          checked={state === 1}
          onChange={() => setState(state === 1 ? 0 : 1)}
        />
      </Form.Group>

      <Form.Group controlId="eventDate">
        <Form.Label>Data do Evento</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="eventLocation">
        <Form.Label>Localização do Evento</Form.Label>
        <Form.Control
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="eventDescription">
        <Form.Label>Descrição do Evento</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Criar Evento
      </Button>
    </Form>
  );
};

export default CreateEventBox;