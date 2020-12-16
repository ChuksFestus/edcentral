import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import CustomText from "../atoms/text";
import colors from "../atoms/colors";
import ProfileSvg from "../components/svg/profile";

export default function Profile() {
  const { user } = useSelector((state) => state.user);
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "hsla(218,100%,49%,0.3)" }}
    >
      <View style={styles.container}>
        <View style={styles.profileSum}>
          <View style={styles.imageContainer}>
            <ProfileSvg width={53} height={67} />
          </View>
          <CustomText style={styles.name} type="semiBold">
            {user.name}
          </CustomText>
          <CustomText style={styles.email}>{user.email}</CustomText>
          <CustomText style={styles.email}>{user.number}</CustomText>
        </View>
        <View style={styles.body}>
          <Image
            style={{ width: 279.07, height: 202.29 }}
            source={require("../assets/images/profile-empty.png")}
          />
          <CustomText
            style={{
              textAlign: "center",
              maxWidth: 287,
              paddingTop: 35,
              color: colors.LightBlack,
            }}
          >
            you haven’t applied for any scholarship yet. go to scholarships
            section to apply
          </CustomText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  profileSum: {
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 130,
    width: 130,
    backgroundColor: "#ECEEF0",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    paddingTop: 12,
    fontSize: 24,
    color: colors.notBlack,
  },
  email: {
    fontSize: 14,
    paddingTop: 3,
    color: "#4D4B6F",
  },
  body: {
    backgroundColor: colors.notWhite,
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
});
