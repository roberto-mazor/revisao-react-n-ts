import { Text, View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        {/* <Text style={styles.texto}> Hello World</Text> */}
        <Input placeholder="Digite aqui..." maxLength={10}></Input>
        <Button valor="Botão" isAtivado={true} activeOpacity={0.5}/>
        <Button valor="Botão2" isAtivado={false} activeOpacity={0.1}/>
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
    backgroundColor: 'rgb(65, 65, 65)',
    fontWeight: '700',
    color: '#f2f2f2',
    padding: 16,
    borderRadius: 1,
  }

})