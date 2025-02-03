import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { useParams } from "react-router";
import { fetchRecipes } from './fetchRecipes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './reduxStore';
import { useEffect } from 'react';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export default () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const recipes = useSelector((state: RootState) => state.recipes.recipes);
    const recipe = recipes.find(r => r.id.toString() === id);
    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    return (<>
        <Root>
            <h2>{recipe?.title}</h2>
            <Divider textAlign="left">DESCRIPTION</Divider>
            {recipe?.description}
            <Divider textAlign="left">INGREDIENTS</Divider>
            {recipe?.ingredients.map((r: string, index: number) => (<><div key={index}>{r}</div></>))}
            <Divider textAlign="left">INSTRUCTIONS</Divider>
            {recipe?.instructions}
        </Root>
    </>)
}

