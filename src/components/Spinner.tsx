import { FadeLoader } from "react-spinners"

export interface SpinnerProps {
    loading: boolean
}

const override = {
    display: "block",
    margin: "100px auto"
}
const Spinner = ({ loading }: SpinnerProps) => {
    return <FadeLoader
        color="purple"
        loading={loading}
        cssOverride={override}
        height={25}
        width={25} />
}

export default Spinner;