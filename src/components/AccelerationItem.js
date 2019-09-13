import React, {useState} from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Modal } from 'react-native';

export default function AccelerationItem({ item }) {
  const [modalVisible, setModalVisible] = useState(false);

  
  return (
    <View>
      <TouchableOpacity 
        className="acceleration-item-btn"
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.item}>
          <Image
            style={styles.itemImage}
            source={{uri: item.banner_url ? item.banner_url : 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png'}}
          />
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemLocation}>{item.location}</Text>
            <Text style={styles.itemDate}>{moment(item.subscription_finish_at).format('DD/MM/YYYY')}</Text>
          </View>
        </View>
      </TouchableOpacity>
      
      <Modal
        className="modal"
        visible={modalVisible}
      >
        <TouchableOpacity
          className="close-modal-btn"
          onPress={() => setModalVisible(false)}
        >
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderColor: '#EFEFEF',
        flexDirection: 'row',
        margin: 15,
        marginTop: 0
    },
    itemImage: {
        height: 90,
        width: 90,
    },
    itemContent: {
        borderLeftWidth: 1,
        borderColor: '#EFEFEF',
        padding: 10
    },
    itemName: {
        fontSize: 20
    },
    itemLocation: {
        color: '#7800ff',
        fontSize: 16,
        marginTop: 5
    },
    itemDate: {
        fontSize: 14,
        marginTop: 5,
    },
});
