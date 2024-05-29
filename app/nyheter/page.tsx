"use client";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function NewsPage() {
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  const bottomVideoRef = useRef<HTMLVideoElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - windowHeight;
      const percentage = (scrollPosition / totalHeight) * 120;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const boxStyle: React.CSSProperties = {
    position: "relative",
    height: "100dvh",
    width: `${100 - scrollPercentage * 0.15}vw`,
    transition: "width 0s ease-in-out",
    willChange: "width",
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "4rem",
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
                  <Card
                    sx={{
                      borderRadius: "20px",
                      overflow: "hidden",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <CardMedia
                      ref={videoRef}
                      component="video"
                      sx={{
                        objectFit: "cover",
                        transition:
                          "transform 0.3s ease-in-out, height 0.5s ease-in-out",
                        height: isHovered ? "65dvh" : "60dvh",
                        width: "100%",
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box style={boxStyle}>
          <CardMedia
            component="video"
            ref={bottomVideoRef}
            sx={{
              borderRadius: "20px",
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
      <Box
        sx={{
          padding: "4rem 6rem 6rem 6rem",
          background: "#f6f5f3",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
          }}
        >
          <Typography sx={{ fontSize: "3rem" }}>Explore the lineup.</Typography>
          <Grid container spacing={4} sx={{ width: "100%" }}>
            <Grid item xs={12} sm={6} md={3}>
              <img
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                }}
                src="https://www.apple.com/v/ipad/home/cj/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_xlarge_2x.png"
              ></img>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                }}
                src="https://www.apple.com/v/ipad/home/cj/images/overview/select/product-tile/pt_ipad_air__cr381zljqdiu_xlarge_2x.png"
              ></img>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                }}
                src="https://www.apple.com/v/ipad/home/cj/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_xlarge_2x.png"
              ></img>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                }}
                src="https://www.apple.com/v/ipad/home/cj/images/overview/select/product-tile/pt_ipad_mini__f3iy3qb50gia_xlarge_2x.png"
              ></img>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
