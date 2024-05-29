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

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <CardMedia
                      ref={videoRef}
                      component="video"
                      sx={{
                        objectFit: "cover",
                        transition:
                          "transform 0.3s ease-in-out, height 0.5s ease-in-out",
                        height: hoveredCard === index ? "65dvh" : "60dvh",
                        width: "100%",
                        transform:
                          hoveredCard === index ? "scale(1.1)" : "scale(1)",
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
      <Box sx={{ padding: "6rem" }}>
        <Grid container spacing={3}>
          {[
            {
              src: "https://www.apple.com/v/education/college-students/a/images/overview/lifestyle_ipad__cd0szs4f2fte_xlarge_2x.jpg",
              title: "Learning",
              description: "Your classroom can be anywhere.",
            },
            {
              src: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-taa-fundamentals.image.large_2x.png",
              title: "Entertainment",
              description: "Kick back. Tune in. Game on.",
            },
            {
              src: "https://www.apple.com/v/mac/home/bz/images/overview/consider/boc_performance_02__b1m37qedkb6q_large_2x.jpg",
              title: "Productivity",
              description: "Your workplace can be any place.",
            },
            {
              src: "https://www.apple.com/v/ipad/home/cj/images/overview/consider/modal/fc_creativity_supplies__fan9ceoh20i2_large_2x.jpg",
              title: "Creativity",
              description: "Take your inner artist out and about.",
            },
          ].map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "80dvh",
                  borderRadius: "20px",
                  position: "relative",
                  cursor: "pointer",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  style={{
                    objectFit: "cover",
                    transition:
                      "transform 0.3s ease-in-out, height 0.5s ease-in-out",
                    height: hoveredCard === index ? "85dvh" : "80dvh",
                    width: "100%",
                    transform:
                      hoveredCard === index ? "scale(1.1)" : "scale(1)",
                  }}
                  src={item.src}
                ></img>
                <Box
                  sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}
                >
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      padding: "2rem",
                      color: "white",
                      fontSize: "1.5rem",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 40,
                      left: 0,
                      padding: "2rem",
                      color: "white",
                      fontSize: "0.75rem",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
