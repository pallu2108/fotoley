import React, { useState, useEffect } from "react";
import { Grid, IconButton, Stack } from "@mui/material";
import { ArrowBack, ArrowForward, Pause, PlayArrow } from "@mui/icons-material";

// Define the image data
const imageData = [
    {
        id: 1,
        imageUrl: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1287145.jpg&fm=jpg",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium, excepturi quis quaerat iste beatae distinctio esse eaque labore? Sequi voluptatum aspernatur vero similique vel incidunt animi, aliquid quod eaque atque!",
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww&w=1000&q=80",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium, excepturi quis quaerat iste beatae distinctio esse eaque labore? Sequi voluptatum aspernatur vero similique vel incidunt animi, aliquid quod eaque atque!",
    },
    {
        id: 3,
        imageUrl: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium, excepturi quis quaerat iste beatae distinctio esse eaque labore? Sequi voluptatum aspernatur vero similique vel incidunt animi, aliquid quod eaque atque!",
    },
    {
        id: 4,
        imageUrl: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1287145.jpg&fm=jpg",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium, excepturi quis quaerat iste beatae distinctio esse eaque labore? Sequi voluptatum aspernatur vero similique vel incidunt animi, aliquid quod eaque atque!",
    },
    {
        id: 5,
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww&w=1000&q=80",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium, excepturi quis quaerat iste beatae distinctio esse eaque labore? Sequi voluptatum aspernatur vero similique vel incidunt animi, aliquid quod eaque atque!",
    },
    {
        id: 6,
        imageUrl: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium, excepturi quis quaerat iste beatae distinctio esse eaque labore? Sequi voluptatum aspernatur vero similique vel incidunt animi, aliquid quod eaque atque!",
    },
    {
        id: 7,
        imageUrl: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1287145.jpg&fm=jpg",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium, excepturi quis quaerat iste beatae distinctio esse eaque labore? Sequi voluptatum aspernatur vero similique vel incidunt animi, aliquid quod eaque atque!",
    },
    {
        id: 8,
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww&w=1000&q=80",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium, excepturi quis quaerat iste beatae distinctio esse eaque labore? Sequi voluptatum aspernatur vero similique vel incidunt animi, aliquid quod eaque atque!",
    },
    {
        id: 9,
        imageUrl: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium, excepturi quis quaerat iste beatae distinctio esse eaque labore? Sequi voluptatum aspernatur vero similique vel incidunt animi, aliquid quod eaque atque!",
    },
    {
        id: 10,
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww&w=1000&q=80",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium, excepturi quis quaerat iste beatae distinctio esse eaque labore? Sequi voluptatum aspernatur vero similique vel incidunt animi, aliquid quod eaque atque!",
    },
    {
        id: 11,
        imageUrl: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium, excepturi quis quaerat iste beatae distinctio esse eaque labore? Sequi voluptatum aspernatur vero similique vel incidunt animi, aliquid quod eaque atque!",
    },
    // Add more images as needed
];

const Catalog = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let slideshowInterval: number | null = null;

        if (isPlaying) {
            slideshowInterval = setInterval(() => {
                goToNextImage();
            }, 3000);
        }

        return () => {
            if (slideshowInterval) {
                clearInterval(slideshowInterval);
            }
        };
    }, [isPlaying]);

    const goToPreviousImage = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? imageData.length - 1 : prevImage - 1
        );
    };

    const goToNextImage = () => {
        setCurrentImage((prevImage) =>
            prevImage === imageData.length - 1 ? 0 : prevImage + 1
        );
    };

    const goToImage = (index: number) => {
        setCurrentImage(index);
    };

    const toggleSlideshow = () => {
        setIsPlaying((prevState) => !prevState);
    };

    return (
        <Grid container spacing={2} padding={"50px"} >
            <Grid container spacing={2}>
                <Grid item lg={8} style={{ position: "relative" }}>
                    <img
                        src={imageData[currentImage].imageUrl}
                        alt={`Image ${currentImage + 1}`}
                        style={{ borderRadius: "15px", width: "700px", maxWidth: "100%" }}
                    />
                    <IconButton onClick={toggleSlideshow} style={{ position: "absolute", bottom: 10, right: 10, color: "white" }}>
                        {isPlaying ? <Pause /> : <PlayArrow />}
                    </IconButton>
                </Grid>
                <Grid item lg={4}>
                    <p>{imageData[currentImage].details}</p>
                </Grid>
            </Grid>
            <Stack direction={"row"}>
                <Grid item xs={12} sx={{ width: "60%", maxWidth: "700px", overflow: "auto" }}>
                    <IconButton onClick={goToPreviousImage}>
                        <ArrowBack />
                    </IconButton>
                    {(imageData.slice(currentImage, currentImage+9).concat(imageData.slice(0, currentImage))).slice(0, 9).map((image, index) => (
                        <IconButton
                            key={image.id}
                            onClick={() => goToImage(index)}
                            style={{ filter: index === currentImage ? "none" : "grayscale(100%)" }}
                        >
                            <img
                                src={image.imageUrl}
                                alt={`Thumbnail ${index + 1}`}
                                style={{ borderRadius: "10px", width: "50px", height: "50px" }}
                            />
                        </IconButton>
                    ))}
                    <IconButton onClick={goToNextImage}>
                        <ArrowForward />
                    </IconButton>
                </Grid>
            </Stack>
        </Grid>
    );
};

export default Catalog