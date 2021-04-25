import styled from 'styled-components';

const FullscreenVideoWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  min-width: 100%;
  min-height: 100%;
`;

const ImgFull = styled.div`
  position: absolute;
  z-index: -100;
`;

const backgroundFinalStyle = {
  fullscreenVideoWrap: { ...FullscreenVideoWrap },
  imageFull: { ...ImgFull },
};

// export default backgroundFinalStyle;
