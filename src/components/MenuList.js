const MenuList = () => {
  return (
    <>
      <ul className="menu-container">
        <li
          className="home-minW1200"
          style={{ borderBottom: "2px solid #258bf7" }}
        >
          <a href="#">홈</a>
        </li>
        <li>
          <a href="#">채용</a>
        </li>
        <li>
          <a href="#">이벤트</a>
        </li>
        <li className="small-visible">
          <a href="#">직군별 연봉</a>
        </li>
        <li className="small-visible">
          <a href="#">이력서</a>
        </li>
        <li className="small-visible">
          <a href="#">
            커뮤니티
            <em>
              <svg
                xmlns="http:///www.w3.org/2000.svg"
                width="18"
                height="11"
                viewBox="0 0 20 11"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                  fontSize="9"
                  fontWeight="500"
                >
                  <g fill="#36F">
                    <g>
                      <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                        <tspan x="2" y="8">
                          New
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
              </svg>
            </em>
          </a>
        </li>
        <li className="small-visible">
          <a href="#">프리랜서</a>
        </li>
        <li className="small-visible">
          <a href="#">
            AI 합격예측
            <em>
              <svg
                xmlns="http:///www.w3.org/2000.svg"
                width="18"
                height="11"
                viewBox="0 0 20 11"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                  fontSize="9"
                  fontWeight="500"
                >
                  <g fill="#36F">
                    <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                      <tspan x="2" y="8">
                        Beta
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </em>
          </a>
        </li>
      </ul>
    </>
  );
};
export default MenuList;
