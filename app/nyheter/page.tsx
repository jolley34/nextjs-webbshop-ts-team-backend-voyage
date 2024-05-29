"use client";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

export default function NewsPage() {
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  const bottomVideoRef = useRef<HTMLVideoElement>(null); // Ny video referens

  useEffect(() => {
    videoRefs.forEach((videoRef, index) => {
      const video = videoRef.current;
      if (video) {
        video.src = videoArray[index];
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.play().catch((error) => console.error("Playback error:", error));
      }
    });

    // Ny video inställningar
    const bottomVideo = bottomVideoRef.current;
    if (bottomVideo) {
      bottomVideo.src =
        "https://www.apple.com/105/media/us/iphone-15/2023/434c1226-dcdc-47be-ae28-6cb67a3a5a7c/anim/highlights-glass/large_2x.mp4";
      bottomVideo.autoplay = true;
      bottomVideo.loop = true;
      bottomVideo.muted = true;
      bottomVideo
        .play()
        .catch((error) => console.error("Playback error:", error));
    }
  }, []);

  const videoArray = [
    "https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-photos-videos/large.mp4",
    "https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-connection/large.mp4",
    "https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/visionos/large.mp4",
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: "6rem" }}>
          <Typography
            variant="subtitle1"
            component="h1"
            fontWeight={600}
            fontSize={"2rem"}
            gutterBottom
          >
            Hämta höjdpunkterna.
          </Typography>
          <Box>
            <Grid container spacing={2}>
              {videoRefs.map((videoRef, index) => (
                <Grid key={index} item xs={12} sm={12} md={4}>
                  <Card>
                    <CardMedia
                      ref={videoRef}
                      component="video"
                      sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box sx={{ position: "relative", width: "100vw", height: "80dvh" }}>
          <CardMedia
            component="video"
            ref={bottomVideoRef}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          ></CardMedia>
          <Typography
            sx={{
              position: "absolute",
              fontSize: "2rem",
              zIndex: 50,
              top: 0,
              left: 0,
              padding: "4rem",
            }}
          >
            Dynamic Island <br /> stays on top of it all.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
