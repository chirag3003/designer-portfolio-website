import styled from "styled-components"

export default styled.nav`
  width: 100%;
  padding: 10px 0;
  font-family: var(--font-styled);
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  .title {
    color: #797979;
    font-size: 1.2rem;

    :hover {
      opacity: 0.6;
    }

  }

  .menu-items {
    display: flex;
    gap: 30px;
    width: 0;
    position: relative;

    .item {
      cursor: pointer;
      padding: 10px;
      color:#4d4d4d;
    }

    .active {
      border: solid 0 black;
      font-weight: bold;
      border-bottom-width: 2px;
      color:black;
    }
  }

  .social-icons {
    display: flex;
    gap: 30px;
    width: 0;
    direction: rtl;
    color:#4d4d4d;
  }
  .menu{
    button{
      padding:5px;
      background: none;
      outline:none;
      border:none;
      box-shadow: none;
      cursor: pointer;
    }
    display:none
  }
  .mobile-nav{
    z-index: 100;
    display: none;
    width: 100vw;
    height: 100vh;
    left:0;
    top:0;
    background: #eaeaea;
    .menu-close{
      position:fixed;
      top:40px;
      right:50px;
    }
  }
  @media (max-width:  1050px){
    .menu-items{
      display: none;
    }
    .social-icons{
      display:none
    }
    .menu{
      display:block;
    }
    .mobile-nav-active{
      display:flex !important;
      align-items: center;
      justify-content: center;
      position:fixed;
      .social-icons{
        display: flex;
        margin-top: 60px;
        width: auto;
      }
      .menu-items{
        display:flex;
        flex-direction: column;
        text-align: center;
        width: auto;
        .item{
          padding:0;
          border:0;
          font-weight:700 !important;
          color:black;
          font-size:1.3rem;
        }
        .active{
          border:none;
        }
      }
    }
  }
`