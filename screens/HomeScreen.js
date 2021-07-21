import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, TouchableOpacity, StyleSheet, View, Text, TextInput, Keyboard } from "react-native";
import Task from "../components/Task";
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ }) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Activity</Text>

        <View style={styles.items}>
          {/* Eveent Task */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
          {/* End */}
        </View>
      </View>

      {/* Task Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'New Task'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addIcon}>
              <Ionicons name="add" size={24} color="#548CA8" />
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {/* End */}
    </View>
  );
};

const styles = StyleSheet.create({
  // Style View
  container: {
    flex: 1,
    backgroundColor: '#548CA8',
  },
  // End

  // Style Tasks 
  tasksWrapper: {
    paddingTop: 70,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  // End

  // Style Input
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    // marginBottom: 60,
    backgroundColor: '#fff',
    borderRightColor: 60,
    width: 250,
    borderRadius: 60,
    paddingLeft: 25,
    fontSize: 16,
  },
  addWrapper: {
    width: 60,
    height: 60,
    // marginBottom: 60,
    borderRadius: 60,
    backgroundColor: '#fff',
  },
  addIcon: {
    paddingTop: 19,
    paddingLeft: 20
  }
  // End
});

export default HomeScreen;