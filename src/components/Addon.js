const Addon = () => {
  return (
    <>
      <aside className="Navbar-aside">
        <ul>
          <li>
            <button id="searchButton" type="button">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                xlink="https://www.w3.org/1999/xlink"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <defs>
                  <path
                    id="qt2dnsql4a"
                    d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                  ></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <use
                    fill="#333"
                    fillRule="nonzero"
                    stroke="#333"
                    strokeWidth=".3"
                    href="#qt2dnsql4a"
                  ></use>
                </g>
              </svg>
            </button>
          </li>
          <li>
            <button
              id="signUpButton"
              type="button"
              data-attribute-id="gnb"
              data-gnb-kind="signupLogin"
            >
              회원가입/로그인
            </button>
          </li>
          <li className={("mdMoreVisible", "leftDivision")}>
            <a id="dashboardButton" href="/#">
              기업 서비스
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Addon;
