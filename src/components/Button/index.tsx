import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import {style} from "./style";


type Props = TouchableOpacityProps & {
    valor: string,
    isAtivado:boolean,
}

export default function Button({valor, isAtivado, ...rest}: Props) {
    return (
        <TouchableOpacity
        {...rest}
            style={
                isAtivado === true 
                ? [style.button, style.buttonAtivo] 
                : [style.button, style.buttonDesativado]
            }
        >
            <Text
                style={style.textoButton}
            >{valor !== '' ? valor : "Não Informado"}</Text>
        </TouchableOpacity>
    )
}