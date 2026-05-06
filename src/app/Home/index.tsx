import { View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function App() {
  return (
    <View style={styles.container}>
      <Input />
      <Button 
        text="Botão" 
        idButton={1}
        isAtivado={true}
        activeOpacity={0.4}
      />

      <Button 
        text="Botão" 
        idButton={2}
        isAtivado={false}
        activeOpacity={0.4}
      />
    </View>
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
    fontWeight: '700',
    color: '#f2f2f2',
    padding: 16,
    borderRadius: 10,
  }
});