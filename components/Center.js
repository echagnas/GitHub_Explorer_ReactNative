import React, { Children } from "react";
import { View } from 'react-native';

export function Center({ children }) {
    return <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        {children}
    </View>
}