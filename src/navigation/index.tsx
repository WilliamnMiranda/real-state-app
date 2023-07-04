import LoginStack from "./stacks/LoginStack";
import AuthStack from "./stacks/AuthStack";

function Navigation() {
  const auth = false;
  return auth ? <AuthStack /> : <LoginStack />;
}

export default Navigation;
