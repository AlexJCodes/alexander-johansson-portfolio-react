import milesWithAlexPhoto from "../assets/images/personal/miles-with-alex-photo.webp";
import padelPhoto from "../assets/images/personal/padel-photo.webp";
import travelPhoto from "../assets/images/personal/travel-photo.webp";

import milesWithAlexVideo from "../assets/videos/miles-with-alex-video.mp4";
import padelVideo from "../assets/videos/padel-video.mp4";
import travelVideo from "../assets/videos/travel-video.mp4";

type ImageRevealMedia = {
  type: "image-reveal";
  imageSrc: string;
  imageAlt: string;
  videoSrc: string;
};

type VideoPosterMedia = {
  type: "video";
  videoSrc: string;
  posterSrc: string;
};

type PersonalInterestAction = {
  description: string;
  label: string;
};

export type PersonalInterest = {
  id: string;
  title: string;
  description: string;
  media: ImageRevealMedia | VideoPosterMedia;
  action?: PersonalInterestAction;
};

export const personalInterests: PersonalInterest[] = [
  {
    id: "padel",
    title: "Padel",
    description: "Spelar oftare än jag borde. Om du besegrar mig bjuder jag på fika.",
    media: {
      type: "image-reveal",
      imageSrc: padelPhoto,
      imageAlt: "Bollkorg med ett rack liggande på en padelbana",
      videoSrc: padelVideo,
    },
    action: {
      description: "Är du en värdig motståndare? Testa din reaktion.",
      label: "Testa här",
    },
  },
  {
    id: "miles-with-alex",
    title: "Miles With Alex",
    description:
      "Mitt motorcykel- och reseprojekt. Berättardriven dokumentation av livet på två hjul.",
    media: {
      type: "video",
      videoSrc: milesWithAlexVideo,
      posterSrc: milesWithAlexPhoto,
    },
  },
  {
    id: "travel",
    title: "Resor",
    description: "Nya platser ger nya perspektiv. Bra för designtänket, dåligt för plånboken.",
    media: {
      type: "image-reveal",
      imageSrc: travelPhoto,
      imageAlt: "Drönarvy över bergslandskap i Kina",
      videoSrc: travelVideo,
    },
  },
];
