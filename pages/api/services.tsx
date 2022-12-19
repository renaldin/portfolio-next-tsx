import { NextApiRequest, NextApiResponse } from "next"
import { services as service } from '../../data'

const services = (req: NextApiRequest, res: NextApiResponse) => {
    // by default get request
    res.status(200).json({ service })
}

export default services