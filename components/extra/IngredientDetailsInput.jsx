import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import IngredientsArray from "@/data/IngredientsArray.json";
import { Colors } from "@/constants/Colors";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import SecondaryButton from "../globals/Buttons/SecondaryButton";
import { Ionicons } from "@expo/vector-icons";
import SelectMeasure from "../food/SelectMeasure";
import Button from "../globals/Buttons/Button";

export default function IngredientDetailsInput({selected, onSelectIngredient}) {
    const [isModalVisible, setIsModalVisible] = useState(false); // Control del modal
    const [inputValue, setInputValue] = useState(""); // Texto ingresado por el usuario
    const [ingredient, setIngredient] = useState({}); // Ingredientes seleccionados
    const [quantity, setQuantity] = useState(""); // Cantidad del ingrediente
    const [measure, setMeasure] = useState(""); // Medida del ingrediente
    const [filteredSuggestions, setFilteredSuggestions] = useState([]); // Sugerencias filtradas
    // const [selectedIngredient, setSelectedIngredient] = useState(""); // Ingrediente seleccionado

    const handleInputChange = (text) => {
        setInputValue(text);

        // Filtrar sugerencias según el texto ingresado
        if (text.trim() === "") {
            setFilteredSuggestions([]); // Si no hay texto, no mostrar sugerencias
        } else {
            const suggestions = IngredientsArray.filter((ingredient) =>
                ingredient.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredSuggestions(suggestions);
        }
    };

    const handleSuggestionPress = (suggestion) => {
        setInputValue(suggestion.name); // Mostrar el nombre del ingrediente
        setIngredient(suggestion); // Guardar el ingrediente seleccionado
        setFilteredSuggestions([]); // Ocultar las sugerencias
    };

    const handleAddIngredient = () => {

        //Validations
        if (!ingredient.id || !quantity || !measure) {
            return;
        }


        const data = {
            id: ingredient.id,
            name: ingredient.name,
            quantity,
            measure,
        };
        console.log(data);
        if (onSelectIngredient) {
            onSelectIngredient(data); // Pasar el ID y el nombre
        }
        setInputValue(""); // Limpiar el campo de texto
        setQuantity(""); // Limpiar la cantidad
        setMeasure(""); // Limpiar la medida
        setFilteredSuggestions([]); // Ocultar las sugerencias
        setIsModalVisible(false); // Cerrar el modal
    }

    return (
        <View>
            {/* Botón para abrir el modal */}
            <TouchableOpacity
                onPress={() => setIsModalVisible(true)}
                style={{ height: hp(7) }}
                className="bg-white flex items-start justify-center px-4 rounded-md"
            >
                <Text className="text-text font-regular">
                {selected.name || "Select an Ingredient"}
                </Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setIsModalVisible(false)} // Cerrar modal al presionar "Atrás"
            >
                <View  className="flex-1 justify-center items-center bg-black/50">
                <View style={{height: hp(60)}} className="bg-fourth rounded-xl w-3/4 p-6">
                    <View className="flex-1">
                        <View className="flex-row justify-between items-start mb-6">
                            <Text className="text-text font-regular text-lg">
                                Search an Ingredient
                            </Text>
                            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                <Ionicons name="close" size={20} color={Colors.light["primary"]} />
                            </TouchableOpacity>
                        </View>
                        <TextInput
                        style={{ height: hp(7) }}
                        className="rounded-lg px-4 text-base bg-white text-text border mb-5 border-gray-300"
                        placeholder="Type an ingredient"
                        placeholderTextColor={Colors.light["sixth"]}
                        value={inputValue}
                        onChangeText={handleInputChange}
                        /> 
                        {/* Lista de sugerencias */}
                        {filteredSuggestions.length > 0 && (
                                <FlatList
                                    style={{ minHeight: hp(20) }}
                                    data={filteredSuggestions}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                    <TouchableOpacity
                                        className="p-4 border-b border-gray-200 flex-row items-center"
                                        onPress={() => handleSuggestionPress(item)}
                                    >
                                        <Image
                                        source={{
                                            uri:
                                            "https://www.themealdb.com/images/ingredients/" +
                                            item.name +
                                            ".png",
                                        }}
                                        style={{ width: 40, height: 40 }}
                                        />
                                        <Text className="text-base ml-3 text-third">{item.name}</Text>
                                    </TouchableOpacity>
                                    )}
                                    className="bg-white rounded-lg mt-2 border border-gray-300"
                                />
                            )}
                            
                        <SelectMeasure quantity={quantity} activeMeasure={measure} setQuantity={setQuantity} setActiveMeasure={setMeasure} />
                    </View>

                    {/* Botón para cerrar el modal */}
                    <View style={{height: hp(7)}}>
                        <Button title="Done" action={handleAddIngredient} />
                    </View>
                    {/* <Button
                    title="Close"
                    onPress={() => setIsModalVisible(false)}
                    color={Colors.light["primary"]}
                    /> */}
                </View>
                </View>
            </Modal>
        </View>
    );
}
