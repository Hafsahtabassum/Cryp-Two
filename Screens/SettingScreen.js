import { AntDesign } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import { Platform, StyleSheet, Switch, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";
import { darkColor, lightColor } from "../Colors";
import { CryptoState } from "../CryptoContext";

const SettingScreen = () => {
  const { setCurrency } = CryptoState();
  const data = [
    "usd",
    "pkr",
    "inr",
    "eur",
    "gbp",
    "cad",
    "aud",
    "cny",
    "rub",
    "idr",
    "mxn",
    "ils",
    "jpy",
    "nzd",
    "nok",
    "sek",
    "chf",
    "sgd",
    "thb",
    "twd",
    "zar",
    "bgn",
    "hkd",
    "php",
    "try",
    "uah",
    "czk",
    "pln",
  ];

  const { theme, setTheme } = CryptoState();
  const [isEnabled, setIsEnabled] = useState(false);
  const onToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    setIsEnabled(theme === "dark" ? true : false);
  }, [theme]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            theme === "light"
              ? lightColor.headerBackground
              : darkColor.headerBackground,
        },
      ]}
    >
      <SafeAreaView>
        <View>
          <Text
            style={{
              color: "#ffff",
              padding: 15,
              fontSize: Platform.OS === "android" ? 20 : 16,
              alignSelf: "center",
            }}
          >
            Settings
          </Text>
        </View>
        <View
          style={[
            styles.body,
            {
              backgroundColor:
                theme === "light"
                  ? lightColor.background
                  : darkColor.background,
            },
          ]}
        >
          <View style={styles.bodyTop}>
            <Text
              style={{
                fontSize: Platform.OS === "android" ? 17 : 14,
                color:
                  theme === "light"
                    ? lightColor.fontColor
                    : darkColor.fontColor,
              }}
            >
              Set Currency
            </Text>
            <SelectDropdown
              data={data}
              onSelect={(selectedItem) => {
                setCurrency(selectedItem);
              }}
              defaultButtonText="Currency"
              renderDropdownIcon={() => (
                <AntDesign name="downcircleo" size={20} color="black" />
              )}
              buttonStyle={{
                borderRadius: 20,
                height: 40,
                width: "37%",
              }}
              buttonTextStyle={{
                fontSize: Platform.OS === "android" ? 17 : 13,
                textTransform: "uppercase",
              }}
              statusBarTranslucent={true}
              dropdownStyle={{
                borderRadius: 20,
              }}
              defaultValueByIndex={0}
              rowStyle={{ height: 40, width: "100%" }}
              rowTextStyle={{
                fontSize: Platform.OS === "android" ? 15 : 11,
                textTransform: "uppercase",
              }}
            />
          </View>
          <Divider
            style={{
              width: "90%",
              alignSelf: "center",
              backgroundColor:
                theme === "light" ? lightColor.fontColor : darkColor.fontColor,
            }}
          />
          <View style={styles.bodyTop}>
            <Text
              style={{
                fontSize: Platform.OS === "android" ? 17 : 14,
                color:
                  theme === "light"
                    ? lightColor.fontColor
                    : darkColor.fontColor,
              }}
            >
              Dark Mode
            </Text>
            <Switch value={isEnabled} onValueChange={onToggle} />
          </View>
          <Divider
            style={{
              width: "90%",
              alignSelf: "center",
              backgroundColor:
                theme === "light" ? lightColor.fontColor : darkColor.fontColor,
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    height: "100%",
    backgroundColor: "#ffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bodyTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "6%",
    paddingHorizontal: "6%",
  },
});
