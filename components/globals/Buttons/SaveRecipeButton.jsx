import { View, ActivityIndicator, TouchableOpacity } from 'react-native'
import {useState, useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { useSaved_SharedStore } from '@/hooks/store/useSaved_SharedStore'
import SavedRecipe from '@/app/(app)/(tabs)/saved/savedRecipe'

export default function SaveRecipeButton({id}) {

    const {saved, isLoading, startToggleSaved} = useSaved_SharedStore();
    const [recipeSaved, setRecipeSaved] = useState();
    

    const handleSave = () => {
        startToggleSaved(id);
        // console.log(id)
        // setSaved(!saved);
    }

    useEffect(() => {
        setRecipeSaved(saved.find(recipe => recipe.id === id));
    }, [saved])

    return (
        isLoading
            ? <ActivityIndicator size={24} color={Colors.light['primary']} />
            :
            <TouchableOpacity onPress = { handleSave } >
                <Ionicons
                    name={recipeSaved ? "add-circle" : "add-circle-outline"}
                    size={24} color={Colors.light['primary']} />
            </TouchableOpacity>
    )
}