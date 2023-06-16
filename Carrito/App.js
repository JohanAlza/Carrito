import { AppNavigation } from "./src/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { iniFirebase } from "./src/utils/firebase";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const App=()=>{

  return(
<>
<NavigationContainer>
<AppNavigation/>
</NavigationContainer>
<Toast/>
</>

  )
};

export default App;