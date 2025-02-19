import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeiht } = Dimensions.get('window');

const hp = percentage => {
    return (percentage * deviceHeiht) / 100;
    
}
const wp = percentage => {
    return (percentage * deviceWidth) / 100;
    
}