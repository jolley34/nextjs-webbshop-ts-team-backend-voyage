"use client";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useEffect, useRef, useState } from "react";

export default function VideoContainer() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [isMuted1, setIsMuted1] = useState<boolean>(true);
  const [isMuted2, setIsMuted2] = useState<boolean>(true);
  const [isPlaying1, setIsPlaying1] = useState<boolean>(false);
  const [isPlaying2, setIsPlaying2] = useState<boolean>(false);
  const [isLoaded1, setIsLoaded1] = useState<boolean>(false);
  const [isLoaded2, setIsLoaded2] = useState<boolean>(false);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    if (video1 && video2) {
      video1.autoplay = true;
      video1.loop = true;
      video1.muted = isMuted1;

      video2.autoplay = true;
      video2.loop = true;
      video2.muted = isMuted2;

      const playPromise1 = video1.play();
      const playPromise2 = video2.play();

      if (playPromise1 !== undefined && playPromise2 !== undefined) {
        Promise.all([playPromise1, playPromise2])
          .then((_) => {
            setIsPlaying1(true);
            setIsPlaying2(true);
            setIsLoaded1(true);
            setIsLoaded2(true);
          })
          .catch((error) => {
            setIsPlaying1(false);
            setIsPlaying2(false);
          });
      }
    }
  }, [isMuted1, isMuted2]);

  const handleToggleMute1 = () => {
    setIsMuted1((prevMuted) => !prevMuted);
  };

  const handleToggleMute2 = () => {
    setIsMuted2((prevMuted) => !prevMuted);
  };

  const handleTogglePlay1 = () => {
    const video1 = video1Ref.current;
    if (video1) {
      if (isPlaying1) {
        video1.pause();
      } else {
        video1.play();
      }
      setIsPlaying1((prevPlaying) => !prevPlaying);
    }
  };

  const handleTogglePlay2 = () => {
    const video2 = video2Ref.current;
    if (video2) {
      if (isPlaying2) {
        video2.pause();
      } else {
        video2.play();
      }
      setIsPlaying2((prevPlaying) => !prevPlaying);
    }
  };

  return (
    <>
      <Box
        sx={{
          opacity: isLoaded1 ? 1 : 0,
          transition: "opacity 1s ease",
          position: "relative",
          height: {
            xs: "80dvh",
            sm: "80dvh",
            md: "80dvh",
          },
        }}
      >
        <CardMedia
          ref={video1Ref}
          component="video"
          src="https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/titanium/large_2x.mp4"
          style={{
            width: "100vw",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <IconButton
          sx={{
            position: "absolute",
            bottom: 10,
            left: 10,
            zIndex: 1,
          }}
          onClick={handleToggleMute1}
        >
          {isMuted1 ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
          onClick={handleTogglePlay1}
        >
          {isPlaying1 ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <Box
          sx={{
            color: "white",
            position: "absolute",
            bottom: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Box>
              <Typography sx={{ fontSize: "3rem" }}>iPhone 15 Pro</Typography>
              <Typography sx={{ fontSize: "1.5rem" }}>
                Titan. Strong. Light. Pro
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  color: "white",
                  padding: "0.5rem 1rem 0.5rem 1rem",
                  background: "#0264C5 ",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    background: "#0374e6",
                  },
                }}
              >
                Read more
              </Button>
              <Button
                sx={{
                  color: "#0264C5 ",
                  padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                  border: "2px solid #0264C5 ",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontSize: "1rem",
                }}
              >
                Buy
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          opacity: isLoaded2 ? 1 : 0,
          transition: "opacity 1s ease",
          position: "relative",
          height: {
            xs: "80dvh",
            sm: "80dvh",
            md: "80dvh",
          },
        }}
      >
        <CardMedia
          ref={video2Ref}
          component="video"
          src="https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/xlarge_2x.mp4"
          style={{
            width: "100vw",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <IconButton
          sx={{
            position: "absolute",
            bottom: 10,
            left: 10,
            zIndex: 1,
          }}
          onClick={handleToggleMute2}
        >
          {isMuted2 ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
          onClick={handleTogglePlay2}
        >
          {isPlaying2 ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <Box
          sx={{
            color: "white",
            position: "absolute",
            bottom: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Box>
              <Typography sx={{ fontSize: "3rem" }}>iPad Pro</Typography>
              <Typography sx={{ fontSize: "1.5rem" }}>
                Unbelievably thin. Incredibly powerful.
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  color: "white",
                  padding: "0.5rem 1rem 0.5rem 1rem",
                  background: "#0264C5",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    background: "#0374e6",
                  },
                }}
              >
                Read more
              </Button>

              <Button
                sx={{
                  color: "#0264C5 ",
                  padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                  border: "2px solid #0264C5 ",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontSize: "1rem",
                }}
              >
                Buy
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
