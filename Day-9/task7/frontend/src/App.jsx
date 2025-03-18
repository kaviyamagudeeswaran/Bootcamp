import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, TextField, Box, Grid } from '@mui/material';

const API_URL = "http://localhost:5000/students";

const App = () => {
    const [students, setStudents] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchStudents();
    }, [searchQuery]);

    const fetchStudents = async () => {
        try {
            const response = await axios.get(API_URL, { params: { query: searchQuery } });
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    return (
        <Box sx={{ p: 4 }}>
            <TextField className='text-white'
                label="Search by Name or ID"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ mb: 3 }}
            />

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
        </Box>
    );
};

export default App;
