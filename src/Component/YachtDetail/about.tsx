import { Fragment } from "react"
import CharterDetail from "./charterDetail"
import YachtTables from '@/Component/YachtDetail/table'
const About = () => {
    return (
        <Fragment>
            <CharterDetail />
            {/* <YachtTables /> */}
            <YachtTables />
        </Fragment>
    )
}
export default About