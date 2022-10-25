import styled from "styled-components"

export default styled.div`
  margin: 50px 0;
  height:60vh;
  @media (max-width:  1080px) {
   height: 50vh;
  }
  @media (max-width:  850px) {
    height: 30vh;
  }
  width:100%;
  .swiper{
    height: 100%;
  }
  .slide, .swiper-slide{
    height: 100%;
    width: 100%;
    img{
      object-fit: cover !important;
    }
  }
`