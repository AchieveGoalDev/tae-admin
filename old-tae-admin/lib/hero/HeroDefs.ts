export type Transition = {
  x: number;
  y: number;
  duration: number;
};

export type ImgObj = {
  path: string;
  alt: string;
  size: string;
};

const defaultSyle =
  "mx-auto left-0 right-0 bottom-20 w-auto drop-shadow-lg col-span-full row-span-full";

const defaultTransitionIn = {
  x: 100,
  y: -25,
  duration: 750,
};

const defaultTransitionOut = {
  x: -100,
  y: 25,
  duration: 750,
};

export class CarouselImage {
  url: string;
  alt: string;
  size: string;
  style: string;
  transitionIn: Transition;
  transitionOut: Transition;
  constructor(
    url: string,
    alt: string,
    size: string,
    style = defaultSyle,
    transitionIn = defaultTransitionIn,
    transitionOut = defaultTransitionOut
  ) {
    this.url = url;
    this.alt = alt;
    this.size = size;
    this.style = this.concatSize(style, size);
    this.transitionIn = transitionIn;
    this.transitionOut = transitionOut;
  }

  concatSize(style: string, size: string) {
    if (size) {
      return size + " " + style;
    } else {
      return "h-full " + style;
    }
  }
}
