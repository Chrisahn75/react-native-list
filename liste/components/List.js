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

  return (
      <FlatList
        data={countries}
        renderItem={(data) => (
        <View style={styles.container}>
          <Text style={styles.text}> {data.item.name.common}</Text>
          <Text style={styles.text}> {data.item.capital ? data.item.capital[0]: "No capital"}</Text>
          <Image style={styles.img} source={{ uri: data.item.flags.png }}/>
        </View>
        )}
        keyExtractor={(_, index) => index.toString()}
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