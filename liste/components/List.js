import { FlatList, Text, StyleSheet, View, Image} from "react-native";
import { useEffect, useState } from "react";

export default function List() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
        console.log(setCountries);
      })
      .catch((err) => console.log(err));
  }, []);

  const Country = ({ item }) => {
    return (
      <View style={styles.container}>
          <Text style={styles.text}> {item.name.common}</Text>
          <Text style={styles.text}> {item.capital}</Text>
          <Image style={styles.img} source={{ uri: item.flags.png }}/>
      </View>
    );
  };
  return (
      <FlatList
        data={countries}
        renderItem={Country}
        keyExtractor={(data, index) => index.toString()}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 5,
  },
  img: {
    height: 100,
    width: 100,
  },
});