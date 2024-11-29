import { RandomColor } from "@/constants/RandomColors";

export const getRandomColor = (id:string = '1') => {

    // return RandomColor[Math.floor(Math.random() * RandomColor.length)];
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = id.charCodeAt(i) + ((hash << 5) - hash); // Operación de mezcla de bits
    }
    // Convertir el hash a un índice de la lista de colores
    const index = Math.abs(hash % RandomColor.length);
    return RandomColor[index];

}