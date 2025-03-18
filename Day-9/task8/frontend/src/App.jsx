import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Box, Grid, Button } from '@mui/material';

const API_URL = "http://localhost:5000/students";

const App = () => {
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchStudents();
    }, [page]);

    const fetchStudents = async () => {
        try {
            const response = await axios.get(API_URL, { params: { page, limit: 6 } });
            setStudents(response.data.students);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    return (
        <Box sx={{ p: 4 }}>
            <Grid container spacing={3}>
                {students.map((student) => (
                    <Grid item key={student._id} xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={student.image || "https://via.placeholder.com/150"}
                                alt={student.name}
                            />
                            <CardContent>
                                <Typography variant="h6">{student.name}</Typography>
                                <Typography color="textSecondary">ID: {student.studentId}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Pagination Controls */}
            <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
                <Button onClick={() => setPage(page - 1)} disabled={page === 1} sx={{ mx: 1 }} variant="contained">
                    Previous
                </Button>
                <Typography sx={{ mx: 2, alignSelf: "center" }}>Page {page} of {totalPages}</Typography>
                <Button onClick={() => setPage(page + 1)} disabled={page === totalPages} sx={{ mx: 1 }} variant="contained">
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default App;
