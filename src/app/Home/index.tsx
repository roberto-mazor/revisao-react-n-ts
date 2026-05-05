import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button"
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.texto}> Hello World</Text>
        <Button valor="Botão" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 24,
    backgroundColor: '#123',
    fontWeight: 700,
    color: '#f2f2f2',
    padding: 16,
    borderRadius: 10,
  }

})