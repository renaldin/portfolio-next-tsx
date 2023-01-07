import Bar from "../components/Bar"
import { languages, tools } from "../data"
import { motion } from 'framer-motion'
import { fadeInUp } from "../animations"

const resume = () => {

    return (
        <div className="px-6 py-2">
            {/* education & exp */}

            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Computer Science Engineering</h5>
                        <p className="font-semibold">Academy of Technology(2017-2021)</p>
                        <p className="my-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quam error vel facere. Delectus ratione architecto mollitia nisi.
                        </p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Software Engineer Jr.</h5>
                        <p className="font-semibold">TCS (2021 - on)</p>
                        <p className="my-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
        </div>
    )
}

export default resume
