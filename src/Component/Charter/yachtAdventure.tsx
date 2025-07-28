import SetSail from "@/common/yarchtcharter"
import PngIcons from "@/icons/pngIcon"
const YachtAdventure = () => {
    return (
        // Reuse the component from the Common
        <SetSail bgImage={PngIcons.crewedimg2}
            bgColor="#034250"
            overlayOpacity={0.3}
        />
    )
}
export default YachtAdventure
