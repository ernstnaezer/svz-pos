import { List, MusicNote } from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"

export const FooterBar = () => {
    
    const router = useRouter()
    const [value, setValue] = useState('home');

    const handleChange = (event:React.SyntheticEvent, newValue:string) => {
        
        setValue(newValue)

        switch(newValue) {
            case "home":
                router.push('/')
                break
            case "open-taps":
                router.push('open-taps')
                break
            case 'radio':
                router.push('radio')
                break
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation showLabels value={value} onChange={handleChange}>
                <BottomNavigationAction label="Verkoop" value="home" icon={<List />} />
                <BottomNavigationAction label="Bonnetjes" value="open-taps" icon={<List />} />
                <BottomNavigationAction label="Radio" value="radio" icon={<MusicNote />} />
            </BottomNavigation>
        </Box>
    )
}