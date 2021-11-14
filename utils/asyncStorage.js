import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeItem = async (key,value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        throw e;
    }
} 

export const getItem = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null){
            return value
        }
        return false
    } catch(e) {
        return false
    }
}

export const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch(e) {
      throw e;
    }
}

