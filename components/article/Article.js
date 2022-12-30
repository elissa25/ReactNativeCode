import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  SafeAreaView,
  Linking,
} from 'react-native';

import Colors from '../../constants/Color';

function Article(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableNativeFeedback
       background={TouchableNativeFeedback.Ripple()}
        style={styles.container}
        onPress={() => Linking.openURL(`${props.url}`)}>
        <View style={[styles.container,{padding: 20, borderRadius: 40}]}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {props.description}
          </Text>
          <View style={styles.data}></View>
          <View style={{marginTop: 10}}>
            <Text>
              source: <Text style={styles.source}>{props.source}</Text>
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 40,
    elevation: 5,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  title: {
    marginTop: 10,
    color: Colors.mauve,
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  source: {
    color: Colors.darkMauve,
  },

});
export default Article;
