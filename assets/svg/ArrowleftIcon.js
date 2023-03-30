import { Svg, Path } from 'react-native-svg'

export const ArrowLeftIcon = ({ width = '24', height = '24', fill = '#0000FF', stroke = '#0000FF' }) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M19 12H5" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 19L5 12L12 5" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}
