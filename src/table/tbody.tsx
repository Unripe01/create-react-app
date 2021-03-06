import { Rows } from "../data/data";
import TR from "./tr"

type Props = {
    rows:Rows
}

const Component: React.FC<Props> = props => (
    <tbody>
        {props.rows.map(row => (
            <TR key={row.id} {...row}></TR>
        ))}
    </tbody>
)
export default Component