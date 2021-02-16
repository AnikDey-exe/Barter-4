import React, { Component } from 'react';
import {Header, Icon} from 'react-native-elements';

const MyHeader = props => {
    return(
        <Header
        centerComponent={{text: props.title,style:{color: 'white',fontSize: 30, fontWeight: 'bold',height: 50, paddingTop: 5}}}
        backgroundColor="orange"/>
    )
}

export default MyHeader;
