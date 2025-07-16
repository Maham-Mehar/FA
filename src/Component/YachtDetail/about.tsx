import { Fragment } from "react"
import CharterDetail from "./charterDetail"
// import YachtTables from '@/Component/YachtDetail/table'
import { Yacht } from "../YachtDetail/hero";

type Props = {
  data: Yacht | null;
};
const About: React.FC<Props> = ({ data }) => {
    return (
        <Fragment>
            <CharterDetail data={data} />
            {/* <YachtTables /> */}
            {/* <YachtTables data={datag  }/> */}
        </Fragment>
    )
}
export default About