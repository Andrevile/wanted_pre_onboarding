const WantedTitle = () => {
  return (
    <div className="wantedtitle-container">
      <div className="wantedLogo-container">
        <button className="hamburger-container">
          <img
            className="hamburger-logo"
            src="https://static.wanted.co.kr/images/icon-menu.png"
          ></img>
        </button>
        <a href="#" className="wanted-container">
          <i id="main-title" className="icon-logo"></i>
        </a>
      </div>
      <button id="SignupBtn">회원가입하기</button>
    </div>
  );
};

export default WantedTitle;
