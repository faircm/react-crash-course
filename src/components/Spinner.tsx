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
        height={150}
        width={150} />
}

export default Spinner;