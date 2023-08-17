import Bar from "../components/Bar"
import { languages, tools } from "../data"
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from "../animations"

const resume = () => {

    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-6 py-2">
            {/* education & exp */}

            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Information Systems</h5>
                        <p className="font-semibold">Politeknik Negeri Subang (2020-2023)</p>
                        <p className="mt-3">
                            - 1st Winner Outstanding Student. Issued by Politeknik Negeri Subang · Apr 2022
                        </p>
                        <p className="mb-3">
                            - 1st Winner Outstanding Student. Issued by Jurusan Manajemen Informatika Politeknik Negeri Subang · Mar 2022
                        </p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Frontend Developer</h5>
                        <p className="font-semibold">PT. Inovasi Kesehatan Indonesia (Kesia) (October 2022 - January 2023)</p>
                        <p className="my-3">
                            This is my internship experience at <a href="https://www.kesia.id/" className="text-green" target="__blank">Kesia.id</a> and was assigned as a Frontend Developer.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* langauges & tools */}

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {
                            languages.map((language) => <Bar data={language} key={language.name} />)
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className="my-2">
                        {
                            tools.map((tool) => <Bar data={tool} key={tool.name} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume
