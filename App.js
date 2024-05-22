import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Components
function Feed({navigation}){
    const formData = {
        Title: 'Hello',
        Content: 'This is an Article page',
}
    return(
        <View style={styles.container}>
            <Text>This is the News Feed!</Text>
            <Button 
                title="Go to Article"
                onPress={() => navigation.navigate("Article", {formData})}
            />
        </View>
    )  
}

function Article({navigation}){
    const route = useRoute();
    const { formData } = route.params;
    return(
        <View style={styles.container}>
            <Text>Welcome to Article page!</Text>
            <Text>{formData.Title}</Text>
            <Text>{formData.Content}</Text>
            <Button 
                onPress={() => navigation.goBack()}
                title = "Go Back"    
            />
        </View>
    )
}

function Post() {
    const navigation = useNavigation();
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
  
    const handleSubmit = () => {
      
        const formData = {
            Title: title,
            Content: content
        }
      navigation.navigate("Article", { formData });
      setTitle("");
      setContent("");
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
        />
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={setContent}
          placeholder="Content"
          multiline
        />
        <Button title="Submit" onPress={handleSubmit} color="grey" />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }


//App function
const Drawer = createDrawerNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Feed" component={Feed}/>
                <Drawer.Screen name="Article" component={Article}/>
                <Drawer.Screen name="Post" component={Post} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

//Stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})

//Mini Exercise #2
/*
1. Create a new component called Post and it would contain the following:
    a. A TextInput for a title
    b. A TextInput for content
    c. Button for Submit
    d. Button to Go Back
2. Add the new component after the Article component in the Drawer Navigation
*/

//Mini Exercise #3
/*
1. Implement a Go Back button in the Article page using navigation.goBack()
2. Try to implement this as well in the Post page
3. Observe the behavior
*/