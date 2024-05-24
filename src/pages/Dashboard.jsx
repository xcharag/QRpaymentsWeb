import React, { useState } from 'react';
import Sidebar from '../components/LateralBar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-calendar/dist/Calendar.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Dashboard.css';

moment.locale('es');

// Registrar la localización en español
registerLocale('es', es);

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    /*const callApi = async () => {
        const data = await fetch('https://www.jesus-nazareno.coop:6280/wsServicoQR.svc?wsdl');
    }*/

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={3} lg={2}>
                    <Sidebar />
                </Col>
                <Col xs={12} md={9} lg={10}>
                    <div className="dashboard-content">
                        <Row>
                            <Col xs={12} md={8}>
                                <div className="round-corner-square justify-content-center">
                                    <h1>Generar Pago con QR</h1>
                                    <Form className="p-3">
                                        <Form.Group className="mb-3" controlId="formBasicCurrency">
                                            <Form.Label className="fw-bold">Moneda:</Form.Label>
                                            <Form.Control type="text" placeholder="Ingresa la moneda..." />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                                            <Form.Label className="fw-bold">Monto:</Form.Label>
                                            <Form.Control type="number" placeholder="Ingresa el monto..." />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicDescription">
                                            <Form.Label className="fw-bold">Glosa:</Form.Label>
                                            <Form.Control type="text" placeholder="Ingresa la descripcion..." />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicExpDate">
                                            <Form.Label className="fw-bold">Fecha de Expiración:</Form.Label>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={date => setSelectedDate(date)}
                                                dateFormat="dd/MM/yyyy"
                                                className="form-control"
                                                locale="es" // Aquí se establece la localización en español
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Generar QR
                                        </Button>
                                    </Form>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="round-corner-square justify-content-center">
                                    <h2>QR Generado</h2>
                                    <div className="qr-container">
                                        <img src="https://placehold.co/300x300" alt="QR" />
                                    </div>
                                </div>
                                <div className="round-corner-square status mt-3">
                                    <h4>Estado del QR</h4>
                                    <button className="btn btn-danger">Pendiente de Pago</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
