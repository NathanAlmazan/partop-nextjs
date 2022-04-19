import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid"; 
import Typography from "@mui/material/Typography";
import Image from "next/Image";
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from "framer-motion";
import Divider from "../Divider";
import CredentialCard from "./CredentialCard";

const credentialList = [
    {
        title: "Certificate of Registration",
        image: "/credentials/birPermit.jpg"
    },
    {
        title: "DTI Registration",
        image: "/credentials/dtiPermit.jpg"
    },
    {
        title: "Mayor's Permit",
        image: "/credentials/mayorsPermit.png"
    }
]

export default function CredentialContainer() {
    const { ref, inView } = useInView();
    const [preview, setPreview] = useState<boolean>(false);

    useEffect(() => {
        if (inView) setPreview(state => inView);
    }, [inView]);

    return (
        <AnimatePresence exitBeforeEnter>
            <Stack direction="column" spacing={8} justifyContent="center" alignItems="center" sx={{ pt: 10, pb: 10, pl: 3, pr: 3, backgroundColor: "#f8f9fa" }}>
                <Container maxWidth="sm">
                    {preview && (
                        <motion.div
                            key="text"
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", duration: 1.5, bounce: 0.3, delay: 0.3 }}
                            exit={{ opacity: 0 }}
                        >
                            <Typography component="div" variant="h2" color="black" align="center">
                                CREDENTIALS
                            </Typography>
                            <Divider position="center" />
                            <Typography component="h1" variant="h4" color="secondary" align="center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.
                            </Typography>
                        </motion.div>
                    )}
                </Container>
                <Container ref={ref} maxWidth="md">
                    {preview && (
                        <motion.div
                            key="certificate"
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", duration: 1.5, bounce: 0.3, delay: 0.3 }}
                            exit={{ opacity: 0 }}
                        >
                            <Grid container spacing={3} justifyContent="center" alignItems="center">
                                {credentialList.map(permit => (
                                    <Grid key={permit.title} item xs={12} sm={6} md={4}>
                                        <CredentialCard title={permit.title} image={permit.image} />
                                    </Grid>
                                ))}
                            </Grid>
                        </motion.div>
                    )}
                </Container>
            </Stack>
        </AnimatePresence>
    )
}