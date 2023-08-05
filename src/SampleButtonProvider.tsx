/* eslint-disable prettier/prettier */
import React from "react";
import { TouchableOpacity,Text } from "react-native";

const SampleButtonComponent:React.FC<{title: string}> = ({title}) => {
    return <TouchableOpacity><Text>{title}</Text></TouchableOpacity>
};
export default SampleButtonComponent;