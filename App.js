import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
  const handleProfilePress = () => {
    console.log('Profile button pressed');
  };

  return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, Devs</Text>
        <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress}>
          <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s' }}
              style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
  );
};

const SearchBar = () => {
  return (
      <View style={styles.searchBarContainer}>
        <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => console.log('Filters button pressed')}>
          <Text style={styles.searchButtonText}>Filters</Text>
        </TouchableOpacity>
      </View>
  );
};

const Categories = () => {
  return (
      <View style={styles.categories}>
        <Text style={styles.categoriesText}>Categories:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryList}>
            <Text style={styles.categoryItem}>Exercise</Text>
            <Text style={styles.categoryItem}>Study</Text>
            <Text style={styles.categoryItem}>Code</Text>
            <Text style={styles.categoryItem}>Cook</Text>
            <Text style={styles.categoryItem}>Clean</Text>
            <Text style={styles.categoryItem}>Exercise</Text>
            <Text style={styles.categoryItem}>Games</Text>
            <Text style={styles.categoryItem}>Sports</Text>
          </View>
        </ScrollView>
      </View>
  );
};

const ImageSpace = () => {
  return (
      <View style={styles.imageSpace}>
        <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFYInWssUbRGKViId6dyiU9OzhqV2FKuc4Q&s' }}
            style={styles.image}
        />
      </View>
  );
};

const TaskItem = ({ title }) => {
  return (
      <View style={styles.taskItem}>
        <Text>{title}</Text>
      </View>
  );
};

const TaskList = () => {
  const tasks = [
    "Software Engineer",
    "Cybersecurity Analyst",
    "Database Administrator",
    "Web Developer",
    "Application Analyst",
    "Game Designer",
    "Algorithm Engineer",
    "Cloud Engineer",
    "Computer Engineer",
    "Information Systems Security Manager",
    "Scientific Computing Applications",
    "UX Designer",
    "Computer Destruction",
    "Computer Animation",
    "Anime Development"
  ];

  return (
      <View style={styles.taskList}>
        <Text style={styles.taskListHeading}>Ongoing Tasks:</Text>
        <ScrollView>
          {tasks.map((task, index) => (
              <TaskItem key={index} title={task} />
          ))}
        </ScrollView>
      </View>
  );
};

const App = () => {
  return (
      <View style={styles.container}>
        <Header />
        <SearchBar />
        <Categories />
        <ImageSpace />
        <TaskList />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8e1',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff8e1',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  profileButton: {
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff8e1',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categories: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoriesText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryList: {
    flexDirection: 'row',
  },
  categoryItem: {
    marginRight: 10,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  imageSpace: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  taskList: {
    flex: 1,
    padding: 15,
  },
  taskItem: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 5,
  },
  taskListHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
