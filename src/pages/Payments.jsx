import React from 'react';
import Sidebar from '../components/LateralBar';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import '../styles/Dashboard.css';

const Payments = () => {
    // Sample data for clients
    const clients = [
        {
            fullName: 'John Doe',
            houseNumber: '101',
            phoneNumber: '123-456-7890',
            email: 'john@example.com',
            remainDue: '$100',
        },
        {
            fullName: 'Jane Smith',
            houseNumber: '102',
            phoneNumber: '987-654-3210',
            email: 'jane@example.com',
            remainDue: '$200',
        },
        // Add more clients as needed
    ];

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={3} lg={2}>
                    <Sidebar />
                </Col>
                <Col xs={12} md={9} lg={10}>
                    <div className="dashboard-content">
                        <div className="round-corner-square">
                            <h2>Lista de Pagos</h2>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Numero de Comprobante</th>
                                    <th>Numero Cuenta Origen</th>
                                    <th>Numero Cuenta Destino</th>
                                    <th>Monto</th>
                                    <th>Moneda</th>
                                    <th>Glosa</th>
                                    <th>Fecha</th>
                                </tr>
                                </thead>
                                <tbody>
                                {clients.map((client, index) => (
                                    <tr key={index}>
                                        <td>{client.fullName}</td>
                                        <td>{client.houseNumber}</td>
                                        <td>{client.phoneNumber}</td>
                                        <td>{client.email}</td>
                                        <td>{client.remainDue}</td>
                                        <td>
                                            <Button variant="success" >Comprobante</Button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                        <Button className="mt-3" variant="primary" block>Generar Excel</Button>
                        <Button className="mt-3" variant="primary" block>Generar TxT</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Payments;
