import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { object } from 'yup';
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
export interface FormData {
    title: string;
    description: string;
    ingredients: string[];
    instructions: string;
}
const validationSchema = object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required("Min length is 20").min(20),
    ingredients: Yup.array().of(Yup.string().required('Ingredient is required')).min(1, 'At least one ingredient is required'),
    instructions: Yup.string().required("Instructions is required").max(500, 'Max length is 100')

}).required()
const addRecipeForm = ({ addToList }: { addToList: Function }) => {
    const {
        formState: { errors },
        register,
        handleSubmit,
        reset,
    } = useForm({ resolver: yupResolver(validationSchema) })
    const [ingredients, setIngredients] = useState<string[]>(['']);
    const handleIngredientChange = (index: number, value: string) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };
    const addIngredientField = () => {
        setIngredients([...ingredients, '']);
    };
    const removeIngredientField = (index: number) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };
    const onSubmit: SubmitHandler<{ ingredients?: string[]; title: string; description: string; instructions: string; }> = (data) => {
        
        data.ingredients = ingredients;
        addToList(data)
        reset()
        setIngredients(['']);

    }
    return (
        <>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh', 
                    '& > :not(style)': { m: 1, width: '25ch' }
                }}                autoComplete="off" >
                <TextField {...register('title')} label="title" variant="filled" />
                {errors.title && <p>{errors.title.message}</p>}
                <br />
                <TextField {...register('description')} label="description" variant="filled" />
                {errors.description && <p>{errors.description.message}</p>}
                <br />
                {ingredients.map((ingredient, index) => (
                    <div key={index}>
                        <TextField
                            value={ingredient}
                            onChange={(e) => handleIngredientChange(index, e.target.value)}
                            label={`Ingredient ${index + 1}`}
                            variant="filled" />
                        <Button onClick={() => removeIngredientField(index)}>Remove</Button>
                    </div>
                ))}
                <br />
                <Button onClick={addIngredientField}>Add Ingredient</Button>
                <br />
                <TextField {...register('instructions')} label="instructions" variant="filled" />
                {errors.instructions && <p>{errors.instructions.message}</p>}
                <br />
                <button type="submit" > submit </button>
            </Box>
        </>);
}
export default addRecipeForm