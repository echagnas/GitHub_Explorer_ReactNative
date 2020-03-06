import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { getUser, getUserRepos } from './repository/GitHubRepository';
import { setUserInfos, setUserRepos } from './store/actions/Actions';
import { UserCard } from './components/UserCard';
import { UserRepoList } from './components/UserRepoList';
import { UIStatus } from './components/UIStatus';
import { Snackbar } from 'react-native-paper';
import * as Font from 'expo-font';

export const Main = () => {
  const [status, setUiState] = useState(UIStatus.SUCCESS);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);

  const userName = useSelector(state => {
    return state.userName
  });

  const userInfos = useSelector(state => {
    return state.userInfos
  });

  const userRepositories = useSelector(state => {
    return state.userRepositories
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (userName) {
      callWS(userName)
    } else {
      dispatch(setUserInfos({}));
      dispatch(setUserRepos([]));
    };
  }, [userName]);

  useEffect(() => {
    loadFont();
  })

  const loadFont = async () => {
    await Font.loadAsync({
      'Oxanium-Regular': require('./assets/fonts/Oxanium/Oxanium-Regular.ttf')
    })
    setFontLoaded(true);
  }

  const callWS = async (userName) => {
    setUiState(UIStatus.LOADING);

    const [userInfos, userRepositories] = await Promise.all([
      getUser(userName),
      getUserRepos(userName)
    ]);

    if (userInfos.error) {
      setUiState(UIStatus.ERROR);
      setSnackBarVisible(true);
      dispatch(setUserInfos({}));
      dispatch(setUserRepos([]));
    } else {
      setUiState(UIStatus.SUCCESS);
      dispatch(setUserInfos(userInfos));
      dispatch(setUserRepos(userRepositories));
    }
  }

  const onFontLoaded = (userInfos, userRepositories) => {
    switch (status) {
      case UIStatus.ERROR:
        return <SafeAreaView style={{ flex: 1, backgroundColor: '#40c4ff' }}>
          <View style={styles.container}>
            <Header />
            <SearchBar />
          </View>
          <Snackbar
            visible={snackBarVisible}
            onDismiss={() => setSnackBarVisible(false)}
            duration='3000'
            action={{
              label: 'Ok',
              onPress: () => {
                setSnackBarVisible(false)
              },
            }}>
            Unknown user
          </Snackbar>
        </SafeAreaView>
      case UIStatus.SUCCESS:
      case UIStatus.LOADING:
        return <SafeAreaView style={{ flex: 1, backgroundColor: '#40c4ff' }}>
          <View style={styles.container}>
            <Header />
            <SearchBar />
          </View>
          {!!Object.keys(userInfos).length ? (<UserCard />) : (null)}
          {!!Object.keys(userRepositories).length ? (<UserRepoList />) : (null)}
        </SafeAreaView>
      default:
        return <Text>DEFAULT</Text>
    }
  }
  return fontLoaded ? onFontLoaded(userInfos, userRepositories) : (<Text>Loading assets...</Text>)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000033',
  },
});
