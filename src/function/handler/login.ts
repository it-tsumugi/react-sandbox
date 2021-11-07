type loginType = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    userName: string;
};

export const login = (props: loginType) => {
    const { setIsLogin, userName } = props;
    if (userName.length === 0) {
        window.alert("ユーザー名を入力しないとログイン出来ません");
    } else {
        setIsLogin(true);
    }
};
