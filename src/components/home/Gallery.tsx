import Container from "@mui/material/Grid";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ProductCard = dynamic(() => import("./ProductCard"));
const Divider = dynamic(() => import("../Divider"));

const productList = [
    { 
        title: "Vibratory Hammer",
        desc: "Laborum Lorem cupidatat aliqua ea Lorem.",
        image: "/products/hammer.jpg"
    },
    { 
        title: "Rock Grapple",
        desc: "Laborum Lorem cupidatat aliqua ea Lorem.",
        image: "/products/grapple.jpg"
    },
    { 
        title: "Hydraulic Quick Coupler",
        desc: "Laborum Lorem cupidatat aliqua ea Lorem.",
        image: "/products/coupler.webp"
    },
    { 
        title: "SPROCKET Gears",
        desc: "Laborum Lorem cupidatat aliqua ea Lorem.",
        image: "/products/gear.png"
    },
    { 
        title: "Truck Tires",
        desc: "Laborum Lorem cupidatat aliqua ea Lorem.",
        image: "/products/tire.jpg"
    },
    { 
        title: "Transmission Filters",
        desc: "Laborum Lorem cupidatat aliqua ea Lorem.",
        image: "/products/trans.jpg"
    },
    { 
        title: "Hydraulic Breaker",
        desc: "Laborum Lorem cupidatat aliqua ea Lorem.",
        image: "/products/hydraulic.jpg"
    },
    { 
        title: "Idler",
        desc: "Laborum Lorem cupidatat aliqua ea Lorem.",
        image: "/products/idler.jpg"
    },
    { 
        title: "Earth Auger",
        desc: "Laborum Lorem cupidatat aliqua ea Lorem.",
        image: "/products/auger.jpg"
    },
]


export default function GalleryContainer() {
    const { ref, inView } = useInView();
    const [preview, setPreview] = useState<boolean>(false);

    useEffect(() => {
        if (inView) setPreview(state => inView);
    }, [inView]);
    
    return (
        <AnimatePresence exitBeforeEnter>
            <Stack direction="column" spacing={8} justifyContent="center" alignItems="center" sx={{ pt: 10, pb: 10, pl: 3, pr: 3, mt: 10 }}>
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
                                OUR PRODUCTS
                            </Typography>
                            <Divider position="center" />
                            <Typography component="h1" variant="h4" color="secondary" align="center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.
                            </Typography>
                        </motion.div>
                    )}
                </Container>
                <Container ref={ref} maxWidth="lg">
                    {preview && (
                        <motion.div
                            key="image"
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", duration: 2, bounce: 0.3, delay: 0.3 }}
                            exit={{ opacity: 0 }}
                        >
                            <Grid container spacing={3} justifyContent="flex-start" sx={{ maxWidth: "100vw" }}>
                                {productList.map(product => (
                                    <Grid key={product.title} item xs={12} sm={6} md={4}>
                                        <ProductCard 
                                            title={product.title}  
                                            desc={product.desc} 
                                            image={product.image}   
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </motion.div>
                    )}
                </Container>
                {preview && (
                    <motion.div
                        key="image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        exit={{ opacity: 0 }}
                    >
                        <Button variant="contained" color="primary" size="large">See All Products</Button>
                    </motion.div>
                )}
            </Stack>
        </AnimatePresence>
    )
}