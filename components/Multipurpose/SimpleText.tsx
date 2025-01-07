import { RegisteredStyle, StyleProp, Text, TextStyle } from "react-native";

const SimpleText = ({
  children,
  style,
}: {
  children: string | number | string[] | null;
  style?: StyleProp<TextStyle>;
}) => {
  return <Text style={style}>{children}</Text>;
};

export default SimpleText;
