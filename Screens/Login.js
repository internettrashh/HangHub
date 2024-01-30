import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LOGINPAGE = () => {
  return (
    <View style={styles.loginPage}>
      <View style={[styles.emailTextbox, styles.emailBorder]} />
      <View style={[styles.emailLine, styles.lineTransform]} />
      <Image
        style={[styles.userIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/login page assest/user.png")}
      />
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View style={[styles.passwordTextbox, styles.passwordBorder]} />
      <View style={[styles.passwordLine, styles.passwordBorder]} />
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      <Image
        style={[styles.lockIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/login page assest/lock.png")}
      />
      {/* <LinearGradient
        style={styles.loginButton}
        locations={[0, 1]}
        colors={["#0281a0", "rgba(2, 129, 160, 0.54)"]}
        useAngle={true}
        angle={180}
      /> */}
      <View style={[styles.googleButton, styles.google1IconPosition]} />
      <Text style={[styles.login, styles.loginFlexBox]}>LOGIN</Text>
      <Image
        style={styles.loginPageChild}
        resizeMode="cover"
        source={require("../assets/login page assest/line-2.png")}
      />
      <Image
        style={styles.loginPageItem}
        resizeMode="cover"
        source={require("../assets/login page assest/line-3.png")}
      />
      <Text style={[styles.orSignIn, styles.orSignInTypo]}>
        or sign in with
      </Text>
      <Image
        style={[styles.google1Icon, styles.google1IconPosition]}
        resizeMode="cover"
        source={require("../assets/login page assest/google-1.png")}
      />
      <Image
        style={styles.loginPageInner}
        resizeMode="cover"
        source={require("../assets/login page assest/ellipse-16.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/login page assest/ellipse-17.png")}
      />
      <Text style={[styles.hangHub, styles.loginFlexBox]}>
        <Text style={styles.hang}>{`Hang `}</Text>
        <Text style={styles.hub}>Hub</Text>
      </Text>
      <Text style={[styles.loginAccount, styles.welcomeBackPosition]}>
        Login Account
      </Text>
      <Text style={[styles.welcomeBack, styles.welcomeBackPosition]}>
        Welcome back !
      </Text>
      <Image
        style={styles.maleUserIcon}
        resizeMode="cover"
        source={require("../assets/login page assest/male-user.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailBorder: {
    height: 39,
    borderWidth: 1,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    top: 400,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  lineTransform: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 1,
    left: 57,
  },
  iconLayout: {
    height: 35,
    width: 29,
    left: 24,
    position: "absolute",
  },
  emailTypo: {
    width: 73,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    left: 67,
    textAlign: "left",
    color: Color.colorSilver,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  passwordBorder: {
    top: 461,
    height: 39,
    borderWidth: 1,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  google1IconPosition: {
    top: 723,
    height: 45,
    position: "absolute",
  },
  loginFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  orSignInTypo: {
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
  },
  welcomeBackPosition: {
    left: 9,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  emailTextbox: {
    width: 352,
    borderRadius: Border.br_3xs,
    left: 21,
  },
  emailLine: {
    height: 39,
    borderWidth: 1,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    top: 400,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  userIcon: {
    top: 404,
  },
  email: {
    top: 411,
  },
  passwordTextbox: {
    width: 352,
    borderRadius: Border.br_3xs,
    left: 21,
  },
  passwordLine: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 1,
    left: 57,
  },
  password: {
    top: 472,
  },
  lockIcon: {
    top: 465,
  },
  loginButton: {
    top: 553,
    backgroundColor: "transparent",
    height: 45,
    width: 349,
    left: 24,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  googleButton: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 349,
    top: 723,
    borderWidth: 1,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 21,
    backgroundColor: Color.colorWhite,
  },
  login: {
    top: 561,
    left: 162,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.colorBlack,
  },
  loginPageChild: {
    top: 686,
    left: 35,
    width: 101,
    height: 1,
    position: "absolute",
  },
  loginPageItem: {
    top: 685,
    left: 233,
    width: 119,
    height: 2,
    position: "absolute",
  },
  orSignIn: {
    top: 676,
    left: 139,
    textAlign: "left",
    position: "absolute",
    color: Color.colorSilver,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  google1Icon: {
    left: 172,
    width: 45,
  },
  loginPageInner: {
    top: -183,
    left: -41,
    width: 445,
    height: 406,
    opacity: 0.25,
    position: "absolute",
  },
  ellipseIcon: {
    top: -171,
    left: 182,
    width: 381,
    height: 342,
    opacity: 0.5,
    position: "absolute",
  },
  hang: {
    color: Color.colorBlack,
  },
  hub: {
    color: "#44a68f",
  },
  hangHub: {
    top: 264,
    left: 32,
    fontSize: 60,
    fontFamily: FontFamily.audiowideRegular,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  loginAccount: {
    top: 114,
    fontSize: 23,
    width: 153,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
  },
  welcomeBack: {
    top: 142,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_mini,
    left: 9,
  },
  maleUserIcon: {
    top: 113,
    left: 151,
    width: 35,
    height: 30,
    position: "absolute",
  },
  loginPage: {
    borderRadius: 20,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default LOGINPAGE;
