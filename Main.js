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
import * as Font from 'expo-font';

export const Main = () => {
  const [status, setUiState] = useState(UIStatus.NONE);
  const [fontLoaded, setFontLoaded] = useState(false);

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
    console.log("CALL WS with user name: ", userName);

    setUiState(UIStatus.LOADING);

    const [userInfos, userRepositories] = await Promise.all([
      getUser(userName),
      getUserRepos(userName)
    ]);

    console.log("Error=", userInfos.error);

    if (userInfos.error) {
      setUiState({
        status: UIStatus.ERROR
      });
      dispatch(setUserInfos({}));
      dispatch(setUserRepos([]));
    } else {
      setUiState({
        status: UIStatus.SUCCESS,
      });
      dispatch(setUserInfos(userInfos));
      dispatch(setUserRepos(userRepositories));
    }

    //console.log("GET USER: ", userInfos);
    //console.log("GET REPO: ", userRepositories);
  }

  return fontLoaded ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#40c4ff' }}>
      <View style={styles.container}>
        <Header />
        <SearchBar />
      </View>
      {!!Object.keys(userInfos).length ? (<UserCard />) : (null)}
      {!!Object.keys(userRepositories).length ? (<UserRepoList />) : (null)}
    </SafeAreaView>
  ) : (<Text>Loading...</Text>)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000033',
  },
});
