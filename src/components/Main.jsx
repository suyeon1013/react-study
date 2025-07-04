// JSX 주의 사항
//1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (반복문 for, if문 안됨)
//2. 숫자, 문자열, 배열 값만 렌더링 된다. (true, null 등 안됨)
//3. 모든 태그는 닫혀있어야 한다. (빈태그는 가능)
import "./Main.css";
const Main = () => {
  const user = {
    name: "성욱이",
    isLogin: "true",
  };
  if (user.isLogin) return <div className="logout">로그아웃</div>;
  else return <div>로그인</div>;
  //   return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
