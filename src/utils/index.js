import { keyframes } from "@emotion/react";

const revealAnim = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0px, 20px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export {revealAnim};