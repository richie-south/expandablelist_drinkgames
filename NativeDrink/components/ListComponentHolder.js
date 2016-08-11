'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import styles from '../styles/ListComponentHolder';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ExtraDimensions from 'react-native-extra-dimensions-android';

const rWindow = Dimensions.get('window');

export default class ListComponentHolder extends Component {

  constructor(props){
    super(props);

    this.state = {
      renderBackButton: false,
      displayChildComponent: false,
      displayAltText: false,
      isOpen: false
    };

  }

  getBackButton() {
    return (<TouchableWithoutFeedback
      onPress={this.backButtonPress.bind(this)}>
        <Animatable.View ref="backButtonWrap" style={styles.backButtonWrap}>
          <Icon style={styles.backButton} name="arrow-back" size={30} color="rgba(255, 255, 255, 0.67)" />
      </Animatable.View>
    </TouchableWithoutFeedback>);
  }

  openPress(){
    if(this.state.isOpen){
      return false;
    }

    this.setState({isOpen: true});
    this.refs.view.transitionTo({height: rWindow.height}, 300);
    this.refs.componentTitle.transitionTo({ fontSize: 20, top: 8 }, 300);

    this.setState({renderBackButton: true, displayChildComponent: true}, () => {
      this.refs.backButtonWrap.transitionTo({left: 16}, 300);
      this.refs.children.fadeIn(100);
      this.setState({displayAltText: true});
    });

    this.props.onPress(this);
  }

  backButtonPress(){
    this.setState({displayAltText: false}, () => {
      this.refs.view.transitionTo({height: 100}, 300);
      this.refs.componentTitle.transitionTo({ fontSize: 30, top:(100/2)-30  }, 300);
      this.refs.backButtonWrap.transitionTo({left: -24}, 300);
      this.refs.children.fadeOut(100);

      setTimeout(() => {
        this.setState({renderBackButton: false, displayChildComponent: false});

      }, 300);
      this.setState({isOpen: false});
      this.props.onBackButtonPress();
    });
  }

  render() {
    let BackButton;
    if(this.state.renderBackButton){
      BackButton = this.getBackButton();
    }

    let childComonent;
    if(this.state.displayChildComponent){
      childComonent = (
        <Animatable.View  ref="children" style={styles.childComonent}>
          {this.props.children}
        </Animatable.View>);
    }

    let text;
    if(this.state.displayAltText){
      text = this.props.altText || this.props.text;
    }else{
      text = this.props.text;
    }

    return (
      <TouchableWithoutFeedback
        onPress={this.openPress.bind(this)}>
        <View ref="elemPos">

        <Animatable.View ref="view" style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>

          <Animatable.Text ref="componentTitle" style={styles.title}>
            {text}
          </Animatable.Text>

          {BackButton}

          {childComonent}

        </Animatable.View>
        </View>
      </TouchableWithoutFeedback>);
  }
}
