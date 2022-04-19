import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';

//components
import Divider from "../Divider";
import { useEffect, useState } from "react";

export default function OwnerProfile() {
    const { ref, inView } = useInView();
    const [preview, setPreview] = useState<boolean>(false);

    useEffect(() => {
        if (inView) setPreview(state => inView);
    }, [inView]);
    
    return (
        <AnimatePresence exitBeforeEnter>
            <Box sx={{ pt: 15, pb: 15 }}>
                <Container>
                    <Grid 
                        container 
                        ref={ref}
                        spacing={2} 
                        justifyContent="center" 
                        alignItems="center" 
                    >
                        <Grid item xs={12} md={6}>
                            {preview && (
                                <motion.div
                                    key="image"
                                    initial={{ opacity: 0, y: 200 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", duration: 1.5, bounce: 0.3, delay: 0.3 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Box sx={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <Image
                                            alt="desc image"
                                            src="/covers/ownerImage.png"
                                            width="520"
                                            height="600"
                                        />
                                    </Box>
                                </motion.div>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {preview && (
                                <motion.div
                                    key="text"
                                    initial={{ opacity: 0, y: 200 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", duration: 2, bounce: 0.3, delay: 0.3 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Box sx={{ paddingRight: 5 }}>
                                        <Typography component="h1" variant="subtitle1" color="primary" fontWeight="bold">
                                            Company Owner
                                        </Typography>
                                        <Typography component="h1" variant="h2" color="black">
                                            MR. JERRY C. LUMANOG
                                        </Typography>
                                        <Divider position="flex-start" />
                                        <Typography component="p" variant="body1" lineHeight={1.5} mb={2}>
                                            Pariatur aliquip ut mollit cillum et cillum excepteur anim. Ut veniam enim proident veniam laborum mollit et fugiat quis non. Laboris qui sit sunt cillum reprehenderit tempor ut ut occaecat magna velit dolore elit ea. Enim incididunt elit eu nostrud sunt velit quis elit esse. Ipsum ad labore est cillum voluptate et ipsum dolor fugiat id proident. Ea cillum id occaecat id reprehenderit do exercitation ullamco nostrud magna.
                                        </Typography>
                                        <Typography component="p" variant="body1" lineHeight={1.5} mb={2}>
                                            Amet adipisicing adipisicing excepteur aliquip voluptate non laboris quis ullamco ullamco labore tempor aliquip. Veniam veniam cupidatat anim irure enim occaecat Lorem non id. Lorem non magna eiusmod consequat velit ex pariatur laborum voluptate.
                                        </Typography>
                                    </Box>
                                </motion.div>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </AnimatePresence>
    )
}