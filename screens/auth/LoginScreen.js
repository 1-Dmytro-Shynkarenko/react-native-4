import { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

// import useRoute from "../../router";

//stateSchema
const initialState = {
  email: "",
  password: "",
};

//images
const imageBG = require("../../assets/images/screenBg.jpg");



export default function LoginScreen({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setdimensions(width);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", onChange);

    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      dimensionsHandler.remove();
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const submitForm = () => {
    keyboardHide();
    navigation.navigate("Home", state);
  };

  const keyboardHide = () => {
    setKeyboardVisible(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const toglePass = () => {
    setShowPass(!showPass);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={imageBG} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isKeyboardVisible ? 32 : 146,
                width: dimensions + 20 * 2,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Войти</Text>
              </View>

              <View style={{ marginBottom: 16 }}>
                <TextInput
                  placeholder="Адрес электронной почты"
                  value={state.email}
                  style={styles.input}
                  textAlign={"left"}
                  onFocus={() => setKeyboardVisible(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={styles.passThmb}>
                <View style={styles.showPassThmb}>
                  <TouchableOpacity activeOpacity={0.6} onPress={toglePass}>
                    <Text style={styles.showPass}>
                      {!showPass ? "Показать" : "Скрыть"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TextInput
                  placeholder="Пароль"
                  value={state.password}
                  style={styles.input}
                  textAlign={"left"}
                  secureTextEntry={!showPass ? true : false}
                  onFocus={() => setKeyboardVisible(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.btn}
                onPress={() => submitForm()}
              >
                <Text style={styles.btnTitle}>Войти</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate({ name: "Registration" })}
              >
                <Text style={styles.regTitle}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "500",
    color: "#212121",
    fontFamily: "Roboto-Regular",
  },
  form: {
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
  },
  input: {
    height: 50,
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    lineHeight: 0.8,
    fontFamily: "Roboto-Regular",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    color: "#212121",
  },
  passThmb: {
    marginBottom: 43,
    position: "relative",
  },
  showPassThmb: {
    position: "absolute",
    top: 14,
    right: 16,

    zIndex: 99,
  },
  showPass: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
  },
  btn: {
    marginBottom: 16,
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 1,
    fontFamily: "Roboto-Regular",
    ...Platform.select({
      ios: {
        borderColor: "#FF6C00",
        backgroundColor: "transparent",
      },
      android: {
        borderColor: "transparent",
        backgroundColor: "#FF6C00",
      },
      default: {
        borderColor: "transparent",
        backgroundColor: "#FF6C00",
      },
    }),
  },
  btnTitle: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    ...Platform.select({
      ios: {
        color: "#1B4371",
      },
      android: {
        color: "#FFFFFF",
      },
      default: {
        color: "#FFFFFF",
      },
    }),
  },
  regTitle: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    color: "#1B4371",
  },
});
