import { Stack, Button, Skeleton, Divider } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {
    isLoading: boolean,
    categories: string[];
    onCategoryChange: (name:string) => void
};

export const ProductsCategories = ({ isLoading, categories, onCategoryChange }: Props) => {

    return (
        <Stack
            direction={ "row" }
            divider={ <Divider orientation="vertical" flexItem /> }
            width="100%"
            spacing={2}
            alignItems="start"
            mb={4}
        >
        
        { isLoading && 
            <Skeleton animation="wave" />
        }

        { !isLoading && categories.map((category) => (
            <Button
                key={category}
                onClick={() => onCategoryChange(category) }
            >
            {category}
            </Button>
        ))}
        </Stack>
    );
};

