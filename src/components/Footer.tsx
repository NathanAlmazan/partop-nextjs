import Box from "@mui/material/Box";
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const QuoteButton = styled(Button)({
    border: "2px solid white",
    color: "white",
    fontSize: 16,
    '&:hover': {
        backgroundColor: "white",
        color: "rgba(0, 0, 0, 0.5)"
    }
})

export default function FooterContainer() {
    const theme = useTheme();
    return (
        <Box sx={{
            position: "relative",
            width: "100%",
            height: 500,
        }}>
            <Box sx={{
                position: "absolute",
                left: 0,
                top: 100,
                height: 400,
                width: "100%",
                backgroundColor: theme.palette.primary.dark
            }}>
                <Container sx={{ pt: 20 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            Link 1
                        </Grid>
                        <Grid item xs={12} md={3}>
                            Link 2
                        </Grid>
                        <Grid item xs={12} md={3}>
                            Link 3
                        </Grid>
                        <Grid item xs={12} md={3}>
                            Link 4
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Paper 
                elevation={10}
                sx={{
                    position: "absolute",
                    left: "10%",
                    top: 0,
                    height: 200,
                    width: "80%",
                    backgroundColor: theme.palette.secondary.main,
                    zIndex: 9,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 5
            }}>
                <Grid container justifyContent="space-between" spacing={2} alignItems="center">
                    <Grid item xs={12} md={9}>
                        <Typography component="div" variant="h2" color="info" align="center">
                            Contact Us For Inquiries or Need a Quotations
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                            <QuoteButton>
                                Get A Quote
                            </QuoteButton>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}