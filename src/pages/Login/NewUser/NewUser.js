import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NewUser.scss';

const NewUser = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  const [userName, setUserName] = useState('');
  const onChangeName = e => {
    setUserName(e.target.value);
  };

  const [userSurname, setUserSurname] = useState('');
  const onChangeSurname = e => {
    setUserSurname(e.target.value);
  };

  // const [pw, setPw] = useState('');
  // const onChangePw = e => {
  //   setPw(e.target.value);
  // };

  const [nameError, setNameError] = useState(true);
  const [surnameError, setSurnameError] = useState(true);

  const isName = () => {
    return userName.length > 0 ? setNameError(true) : setNameError(false);
  };

  const isSurname = () => {
    return userSurname.length > 1
      ? setSurnameError(true)
      : setSurnameError(false);
  };

  // const isPw = () => {
  //   return pw
  // }

  return (
    <div className="newUser">
      <div className="newUserBox">
        <header className="header">
          <div className="logoBox">
            <img
              className="swooshLogo"
              src="./images/swoosh-logo.jpg"
              alt="swoosh logo"
            />
          </div>
          <h1 className="newUserGuide">이제 나이키 멤버가 되어볼까요?</h1>
          <div className="codeSent">인증코드를 전송했습니다.</div>
        </header>
        <div className="newUserEmailBox">
          <span className="newUserEmail">wecode@naver.com</span>
          <button onClick={goToLogin} className="edit">
            편집
          </button>
        </div>
        <form className="newUserInfoContainer">
          <section className="newUserInputBox">
            <div className="newUserNameBox">
              <input
                type="text"
                className={
                  nameError
                    ? 'newUserNameInputValid'
                    : 'newUserNameInputInvalid'
                }
                id="newUserSurname"
                placeholder="성"
                onChange={onChangeName}
                onKeyUp={isName}
              />
              <label htmlFor="newUserName" />
              <input
                type="text"
                className={
                  surnameError
                    ? 'newUserSurnameInputValid'
                    : 'newUserSurnameInputInvalid'
                }
                id="newUserName"
                placeholder="이름"
                onChange={onChangeSurname}
                onKeyUp={isSurname}
              />
              <label htmlFor="newUserSurname" />
            </div>
            <div className="newUserPwdBox">
              <input
                type="text"
                className="newUserPwdInput"
                id="newUserPwd"
                placeholder="비밀번호"
              />
              <label htmlFor="newUserPwd" />
              <div className="pwdRules">
                <ul className="numbers">X 최소 8자</ul>
                <ul className="characters">
                  X 알파벳 대문자 및 소문자 조합, 최소 1개 이상의 숫자
                </ul>
              </div>
            </div>
            <div className="defaultShopping">
              <select>
                <option value="">쇼핑 기본 설정</option>
                <option value="men">남성용</option>
                <option value="women">여성용</option>
              </select>
            </div>
            <div className="newUserBirth">
              <input
                type="date"
                className="newUserBirthInput"
                placeholder="생년월일"
              />
              <div className="getReward">
                생일에 나이키 멤버 리워드를 받으세요.
              </div>
            </div>
          </section>
          <section className="agreeCheckBox">
            <input type="checkbox" className="agreeCheck" />
            <span className="agreeGuide">
              나이키의{' '}
              <Link
                to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=KR&language=ko&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df"
                className="personalInfoAgreement"
              >
                개인 정보 처리 방침
              </Link>
              및{' '}
              <Link
                to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=KR&language=ko&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df"
                className="usingAgreement"
              >
                {' '}
                이용약관
              </Link>
              에 동의합니다.
            </span>
          </section>
          <div className="createUserBtnBox">
            <button className="createUserBtn">계정 만들기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
