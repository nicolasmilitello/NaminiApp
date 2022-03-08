export const ScaleDownCenter = `
  -webkit-animation: scale-down-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-down-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

@-webkit-keyframes scale-down-center {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
}
@keyframes scale-down-center {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
}
  `;
