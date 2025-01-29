import { Recipe } from "../Recipe"
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export default ({ recipe }: { recipe: Recipe }) => {

    return (<>
        <Root>
            <h2>{recipe.title}</h2>
            <Divider textAlign="left">DESCRIPTION</Divider>
            {recipe.description}
            <Divider textAlign="left">INGREDIENTS</Divider>
            {recipe.ingredients.map((r:string, index: number)=>(<><div key={index}>{r}</div></>))}
            <Divider textAlign="left">INSTRUCTIONS</Divider>
            {recipe.instructions}

        </Root>


    </>)
}