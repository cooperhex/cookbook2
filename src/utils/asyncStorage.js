import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const setAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('store', [key, value]);
  } catch (error) {
    console.log('error', error);
  }
};

export const setMultiAsyncStorage = async (data) => {
  try {
    await AsyncStorage.multiSet(data);
  } catch (error) {
    // Error saving data
  }
};

export const getAsyncStorage = async (key) => {
  let data = null;
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      data = value;
    }
  } catch (error) {
    // Error retrieving data
  }
  return data;
};

export const removeAsyncStorage = async (key, success) => {
  try {
    await AsyncStorage.removeItem(key, success);
  } catch (error) {
    // Error retrieving data
  }
};

export const removeMultiAsyncStorage = async (key, success) => {
  try {
    await AsyncStorage.multiRemove(key, success);
  } catch (error) {
    // Error retrieving data
  }
};

export const getMultiAsyncStorage = async (keys, success) => {
  try {
    await AsyncStorage.multiGet(keys, success);
  } catch (error) {}
};
