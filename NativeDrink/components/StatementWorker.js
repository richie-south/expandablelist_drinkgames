'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableNativeFeedback
} from 'react-native';
import styles from '../styles/StatementWorker';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class StatementWorker extends Component {

  constructor(props){
    super(props);


    const firstRandomStatementPos = Math.floor(Math.random() * this.props.statements.length);
    this.state = {
      statements: this.props.statements,
      firstRandomStatement: this.props.statements[firstRandomStatementPos]
    };

    const statementsLeft = this.state.statements.splice(firstRandomStatementPos, 1);
    //this.setState({statements: statementsLeft});
  }

  buttonNextPressed(){

  }

  getRandomStatement(){
    return this.state.firstRandomStatement;
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.statementWrap}>
          <Text style={[styles.statement, {color: this.props.mainColor}]}>
            {this.getRandomStatement()}
          </Text>
        </View>

        <TouchableNativeFeedback
           onPress={this.buttonNextPressed.bind(this)}
           background={TouchableNativeFeedback.SelectableBackground()}>

          <View style={[styles.button, { borderColor: this.props.mainColor }]}>
            <Text style={[styles.buttonText, {color: this.props.mainColor }]}>Nästa</Text>
          </View>
       </TouchableNativeFeedback>

      </View>
    );
  }
}
