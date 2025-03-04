import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Grid, Container, Box } from '@mui/material';


export default function Hotels() {
    const { result, loading, error } = useSelector((state) => state.api);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Hotels
            </Typography>
            <Grid container spacing={3}>
                {result.map((hotel) => (
                    <Grid item xs={12} sm={6} md={4} key={hotel.id}>
                        <Card>
                            {hotel.imageUrl ? (
                                <img
                                    src={hotel.imageUrl}
                                    alt="hotel"
                                    style={{ height: 140, width: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <Box
                                    sx={{
                                        height: 140,
                                        width: '100%',
                                        backgroundColor: 'grey.300',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography variant="h6" color="textSecondary">
                                        No Image
                                    </Typography>
                                </Box>
                            )}
                            <CardContent>
                                <Typography variant="h6">{hotel.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {hotel.address}
                                </Typography>
                                <Typography variant="body1">Rating: {hotel.hotel_rating}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
