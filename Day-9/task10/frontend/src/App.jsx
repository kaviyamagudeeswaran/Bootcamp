import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Navbar, Nav, ListGroup, Pagination } from "react-bootstrap";
import "./App.css";

function App() {
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchStudents();

        // Auto refresh every 30 seconds
        const interval = setInterval(fetchStudents, 30000);
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [page]);

    const fetchStudents = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/students?page=${page}&limit=6`);
            setStudents(response.data.students);
            setTotalPages(Math.ceil(response.data.total / 6));
        } catch (error) {
            console.error("Error fetching students", error);
        }
        setLoading(false);
    };

    return (
        <>
            {/* Navbar */}
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Student Portal</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container fluid>
                <Row>
                    {/* Sidebar */}
                    <Col md={2} className="p-3 bg-light sidebar">
                        <ListGroup variant="flush">
                            <ListGroup.Item action>Dashboard</ListGroup.Item>
                            <ListGroup.Item action>Students</ListGroup.Item>
                            <ListGroup.Item action>Courses</ListGroup.Item>
                            <ListGroup.Item action>Settings</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    {/* Student Cards */}
                    <Col md={10} className="p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4>Students</h4>
                            <Button variant="primary" onClick={fetchStudents} disabled={loading}>
                                {loading ? "Refreshing..." : "Refresh Data"}
                            </Button>
                        </div>

                        <Row>
                            {students.map((student) => (
                                <Col md={4} key={student._id}>
                                    <Card className="mb-4 student-card">
                                        <Card.Img variant="top" src={student.avatar || "https://via.placeholder.com/150"} />
                                        <Card.Body>
                                            <Card.Title>{student.name}</Card.Title>
                                            <Card.Text>Email: {student.email}</Card.Text>
                                            <Card.Text>Course: {student.course}</Card.Text>
                                            <Button variant="primary">View Profile</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        {/* Pagination */}
                        <Pagination className="mt-3">
                            <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page === 1} />
                            {[...Array(totalPages)].map((_, index) => (
                                <Pagination.Item key={index} active={index + 1 === page} onClick={() => setPage(index + 1)}>
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next onClick={() => setPage(page + 1)} disabled={page === totalPages} />
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
