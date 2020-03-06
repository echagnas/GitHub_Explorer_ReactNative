import React from "react";
import { DataTable } from 'react-native-paper';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { useSelector } from 'react-redux';

export const UserRepoList = () => {
    const userRepositories = useSelector(state => {
        return state.userRepositories
    });

    return <View style={styles.flexStyle}>
        <Card style={styles.cardStyle}>
            <Card.Content style={styles.flexStyle}>
            <DataTable style={styles.flexStyle}>
                    <DataTable.Header>
                        <DataTable.Title>
                            <Text style={styles.headerTitleStyle}>
                                Repositories
                            </Text>
                        </DataTable.Title>
                    </DataTable.Header>
                    <View style={styles.flexStyle}>
                        <ScrollView>
                            {userRepositories.map(({name: repoName, id}) => 
                                <DataTable.Row key={id}>
                                    <DataTable.Cell>
                                        <Text style={styles.cellStyle}>
                                        {repoName}
                                        </Text>
                                        </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </ScrollView> 
                    </View>
                </DataTable>
            </Card.Content>
        </Card>
    </View>
}

const styles = StyleSheet.create({
    flexStyle:{
        flex: 1,
    },
    cardStyle: {
        backgroundColor: '#00000011',
        flex: 1,
        borderRadius:10, 
        margin:10
      },
    headerTitleStyle: {
        fontFamily: 'Oxanium-Regular',
        fontSize: 25
    },
    cellStyle: {
        fontFamily: 'Oxanium-Regular',
        fontSize: 20,
        color: '#00000088'
    },
  });

 /*
  <DataTable>
        <DataTable.Header>
            <DataTable.Title>Repo name</DataTable.Title>
        </DataTable.Header>

        
        <DataTable.Row>
            <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        </DataTable.Row>

    </DataTable>
    */