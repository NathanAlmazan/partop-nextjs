import { useState, MouseEvent } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import CertificateDialog from "./CertificateDialog";

interface CredentialProps {
    title: string;
    image: string;
}

export default function CredentialCard(props: CredentialProps) {
    const theme = useTheme();
    const { title, image } = props;
    const [open, setOpen] = useState<string | null>(null);

    const handleCardClick = (event: MouseEvent<HTMLDivElement>) => {
        setOpen(image);
    }

    return (
        <>
        <Card onClick={handleCardClick} elevation={10} sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <Image 
                alt={title}
                src={image}
                width="300"
                height="450"
            />
            <CardContent sx={{ backgroundColor: theme.palette.primary.dark }}>
                <Typography gutterBottom variant="h6" align="center" color="white" component="div">
                    {title}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        <CertificateDialog open={Boolean(open != null)} handleClose={() => setOpen(null)} image={open} />
        </>
    );
}
