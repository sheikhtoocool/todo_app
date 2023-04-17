import React from 'react';
import {Text, View} from 'react-native';
import styles from '../TaskDetail/styles';

const TaskDetails = (props: any) => {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.itemRow}>
        <Text style={styles.itemLabelText}>Task ID </Text>
        <Text style={styles.itemDataText}>{props?.id || 'N/A'}</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.itemLabelText}>Task Info</Text>
        <Text style={styles.itemDataText}>{props?.info || 'N/A'}</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.itemLabelText}>Status</Text>
        <Text style={styles.itemDataText}>{props?.status || 'N/A'}</Text>
      </View>
    </View>
  );
};

export default TaskDetails;
