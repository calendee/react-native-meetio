import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView, RectButton } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";

import { Box, Header, Icons, Text } from "../../components";
import { Images } from "../../constants";
import { AppStackParamList } from "../../types";
import AppRoute from "../../navigation/app.routes";

interface HomeProps {
  navigation: StackNavigationProp<AppStackParamList, AppRoute.HOME>;
}

const LEFT = -25;
const BUTTON_SIZE = 52;
const BORDER_BOTTOM_LEFT_RADIUS = 80;

const styles = StyleSheet.create({
  headerContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 180,
  },
  activityProfilesImageStyle: {
    ...StyleSheet.absoluteFillObject,
    left: -30,
    width: 480,
    top: -32,
  },
  onboardingImageStyle: {
    ...StyleSheet.absoluteFillObject,
    width: 480,
    height: 260,
    left: -30,
  },
  componentsImageStyle: {
    ...StyleSheet.absoluteFillObject,
    left: LEFT,
  },
  categoryTitleContainer: {
    marginTop: 150,
    marginLeft: 80,
  },
  categoryButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  addButton: {
    position: "absolute",
    right: 16,
    bottom: 50,
    backgroundColor: "white",
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Categories = [
  {
    title: "Outdoors",
    subtitle: "128 topics - 4k articles",
    source: Images.bg1,
  },
  {
    title: "Technology",
    subtitle: "110 topics - 1k articles",
    source: Images.bg2,
  },
  {
    title: "Health & Wellness",
    subtitle: "56 topics - 2k articles",
    source: Images.bg3,
  },
  {
    title: "Music",
    subtitle: "128 topics - 4k articles",
    source: Images.bg4,
  },
];

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const goToComponents = () => {
    navigation.navigate(AppRoute.COMPONENTS);
  };
  return (
    <Box flex={1} backgroundColor="lightBlue">
      <ScrollView>
        <Box flex={1}>
          <Box
            {...StyleSheet.absoluteFillObject}
            top={526}
            height={246}
            borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}
            backgroundColor="white"
          >
            <Box flex={1} borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}>
              <Image
                source={Images.bg4}
                style={styles.activityProfilesImageStyle}
              />
              <RectButton style={styles.categoryButton}>
                <Box style={styles.categoryTitleContainer}>
                  <Text variant="title1" color="white">
                    Activities & Profiles
                  </Text>
                </Box>
              </RectButton>
            </Box>
          </Box>
          <Box
            {...StyleSheet.absoluteFillObject}
            top={385}
            height={233}
            borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}
          >
            <Box flex={1} borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}>
              <Image source={Images.bg3} style={styles.onboardingImageStyle} />
              <RectButton style={styles.categoryButton}>
                <Box style={styles.categoryTitleContainer}>
                  <Text variant="title1" color="white">
                    Onboarding
                  </Text>
                </Box>
              </RectButton>
            </Box>
          </Box>
          <Box
            {...StyleSheet.absoluteFillObject}
            top={244}
            height={219}
            borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}
          >
            <Box flex={1} borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}>
              <Image source={Images.bg2} style={styles.componentsImageStyle} />
              <RectButton
                style={styles.categoryButton}
                onPress={goToComponents}
              >
                <Box style={styles.categoryTitleContainer}>
                  <Text variant="title1" color="white">
                    Components
                  </Text>
                </Box>
              </RectButton>
            </Box>
          </Box>
          <Box
            {...StyleSheet.absoluteFillObject}
            top={63}
            height={247}
            borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}
          >
            <Box flex={1} borderBottomLeftRadius={BORDER_BOTTOM_LEFT_RADIUS}>
              <Image
                source={Images.bg1}
                style={{ ...StyleSheet.absoluteFillObject, left: LEFT }}
              />
              <RectButton style={styles.categoryButton}>
                <Box style={styles.categoryTitleContainer}>
                  <Text variant="title1" color="white">
                    Main App
                  </Text>
                </Box>
              </RectButton>
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <Box style={styles.headerContainer}>
        <Header
          title="Categories"
          height={180}
          borderBottomLeftRadius={80}
          leftIcon={
            <Box marginLeft="m">
              <Icons.Back />
            </Box>
          }
          rightIcon={
            <Box marginRight="m">
              <Icons.Filter />
            </Box>
          }
        />
      </Box>
      <View style={styles.addButton}>
        <Icons.Add />
      </View>
    </Box>
  );
};

export default Home;
