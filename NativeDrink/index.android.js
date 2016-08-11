'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles/index';
import ListComponentHolder from './components/ListComponentHolder';
import StatementWorker from './components/StatementWorker';

class NativeDrink extends Component {

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      scrollEnabled: true,
      listViewData: ds.cloneWithRows(Array(6).fill(0)),
      lastPos: 0
    };
  }

  onListComonentHolderPress(component){
    setTimeout(() => {
      component.refs.elemPos.measure( (fx, fy, width, height, px, py) => {
        let offset = this.refs.myListView.scrollProperties.offset;
        this.refs.myListView.scrollTo({y: py+offset});
        this.setState({lastPos: offset});
      });
    }, 320);
    this.stopScroll();
  }

  stopScroll(){
    this.setState({scrollEnabled: false});
  }

  onListComponentHolderBackPress(){
    setTimeout(() => {
      this.refs.myListView.scrollTo({y: this.state.lastPos});
    }, 0);
    this.startScroll();
  }

  startScroll(){
    this.setState({scrollEnabled: true});
  }

  getListComenentHolders(){
    const components = [
      (<ListComponentHolder backgroundColor={"#e06c6c"} text="Jag har aldrig" altText="Jag har aldrig..." onPress={this.onListComonentHolderPress.bind(this)}  onBackButtonPress={this.onListComponentHolderBackPress.bind(this)}>
        <StatementWorker statements={['a', 'b', 'c']} mainColor={'#F5CECE'} />
      </ListComponentHolder>),

      (<ListComponentHolder  backgroundColor={"#db5757"} text="Pekeleken" altText="Vem har störst sanolikhet att.." onPress={this.onListComonentHolderPress.bind(this)} onBackButtonPress={this.onListComponentHolderBackPress.bind(this)}>
        <StatementWorker statements={['a2', 'b3', 'b4']} mainColor={'#F3C8C8'} />
      </ListComponentHolder>),

      (<ListComponentHolder  backgroundColor={"#d74242"} text="Rull tärning" onPress={this.onListComonentHolderPress.bind(this)} onBackButtonPress={this.onListComponentHolderBackPress.bind(this)}>
        <Text>du börjar här</Text>
      </ListComponentHolder>),

      (<ListComponentHolder  backgroundColor={"#D32F2F"} text="Sanning eller konsekvens" onPress={this.onListComonentHolderPress.bind(this)} onBackButtonPress={this.onListComponentHolderBackPress.bind(this)}>
        <Text>du börjar här</Text>
      </ListComponentHolder>),

      (<ListComponentHolder  backgroundColor={"#bd2828"} text="Snurra flaskan" onPress={this.onListComonentHolderPress.bind(this)} onBackButtonPress={this.onListComponentHolderBackPress.bind(this)}>
        <Text>du börjar här</Text>
      </ListComponentHolder>),

      (<ListComponentHolder  backgroundColor={"#a82424"} text="ölspelet" onPress={this.onListComonentHolderPress.bind(this)} onBackButtonPress={this.onListComponentHolderBackPress.bind(this)}>
        <Text>du börjar här</Text>
      </ListComponentHolder>)

    ];
    return (rowData, sectionID, rowID) => {
      return components[Number(rowID)];
    };

  }

  render() {
    return (
      <View  style={styles.container}>

        <ListView
          style={styles.scrollView}
          ref="myListView"
          scrollEnabled={this.state.scrollEnabled}
          dataSource={this.state.listViewData}
          renderRow={this.getListComenentHolders()}>


        </ListView>

      </View>
    );
  }
}

AppRegistry.registerComponent('NativeDrink', () => NativeDrink);
