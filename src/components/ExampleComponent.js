// src/components/ExampleComponent.js

import React, { useState, useEffect } from 'react';
import { Paper, Typography, CircularProgress } from '@mui/material';

const ExampleComponent = () => {
    const [data, setData] = useState([]); // Initialize state as an empty array
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Simulate a data fetch with a timeout
        const fetchData = async () => {
            try {
                const result = await new Promise((resolve) =>
                    setTimeout(() => resolve(['Item 1', 'Item 2', 'Item 3']), 1000)
                );
                setData(result); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Dynamic Content with Paper
            </Typography>

            {loading ? (
                // Show a loading spinner while data is being fetched
                <CircularProgress />
            ) : data.length > 0 ? (
                // Map over the data and render a Paper component for each item
                data.map((item, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        style={{
                            padding: '10px',
                            marginBottom: '10px',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6">{item}</Typography>
                    </Paper>
                ))
            ) : (
                // Fallback if no data is available
                <Typography variant="body1">No data available</Typography>
            )}
        </div>
    );
};

export default ExampleComponent;
