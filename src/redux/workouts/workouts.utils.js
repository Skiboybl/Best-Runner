export const addNewWorkout = (workoutItems, itemToAdd) => {
    return [...workoutItems, { ...itemToAdd, id: workoutItems.length }]
}

export const deleteWorkout = (workoutItems, itemToDelete) => {
    const filteredWorkouts = workoutItems.filter(item => item.id !== itemToDelete.id)
    return [...filteredWorkouts]
}

export const editWorkout = (workoutItems, editedItem) => {
    const filteredWorkouts = workoutItems.filter(item => item.id !== editedItem.id)
    return [...filteredWorkouts, editedItem]
}