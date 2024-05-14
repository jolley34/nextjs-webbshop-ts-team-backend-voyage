"use client";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, CardMedia } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";

export default function VideoContainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.autoplay = true;
      video.loop = true;
      video.muted = isMuted;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            setIsPlaying(true);
            setIsLoaded(true);
          })
          .catch((error) => {
            setIsPlaying(false);
          });
      }
    }
  }, [isMuted]);

  const handleToggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying((prevPlaying) => !prevPlaying);
    }
  };

  return (
    <>
      <Box
        sx={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 1s ease",
          height: {
            xs: "100dvh",
            sm: "100dvh",
            md: "100dvh",
          },
        }}
      >
        <CardMedia
          ref={videoRef}
          component="video"
          src="https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge_2x.mp4"
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
          onClick={handleToggleMute}
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
          onClick={handleTogglePlay}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            position: "absolute",
            padding: {
              xs: "3.5rem 3.5rem 6rem 3.5rem",
              sm: "4rem 4rem 6rem 4rem",
              md: "4rem 4rem 6rem 4rem",
            },
            bottom: 0,
            left: 0,
            zIndex: 1,
            textAlign: "left",
          }}
          width={{ xs: "75%", sm: "65%", md: "35%" }}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
            }}
            fontSize={{
              xs: "1.25rem",
              sm: "1.25rem",
              md: "1.5rem",
            }}
            color="#ffffff"
          >
            ananas
          </Typography>
          <Typography
            variant="body2"
            color="#ffffff"
            sx={{
              fontSize: "1rem",
              fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
            }}
          >
            Explore the power of ananas
          </Typography>
        </Box>
      </Box>
    </>
  );
}
