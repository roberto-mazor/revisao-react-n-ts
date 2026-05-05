import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

export default function Button({valor}) {
    return (
        <TouchableOpacity>
            <Text
                style={[{ fontSize: 32 }]}
            >{valor !== '' ? valor : "Não Informado"}</Text>
        </TouchableOpacity>
    )
}