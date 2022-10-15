import styled from 'styled-components'

export default styled.div`
  margin-top:100px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  @media (max-width:  1080px) {
    grid-template-columns: repeat(3,1fr);
  }
  @media (max-width:  850px) {
    grid-template-columns: repeat(2,1fr);
  }
  @media (max-width:  550px) {
    grid-template-columns: repeat(1,1fr);
  }
  grid-template-rows: min-content;
  .gallery-item{
    position: relative;
    width: 100%;
    padding:10px;
    aspect-ratio: 1/1;
    .image{
      width: 100%;
      aspect-ratio: 1/1;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      cursor:pointer;
      transition:0.5s;
      :hover{
        img{
          filter: blur(2px);
        }
        .title{
          bottom: 40px;
        }
      }
      .title{
        transition: 0.2s;
        font-size:2rem;
        font-weight: bold;
        position: absolute;
        left:30px;
        right:30px;
        bottom :-100px;
      }
    }
  }
  
`