// import { GetServerSidePropsContext, GetStaticPathsContext } from "next"
import { services } from "../data"
import ServiceCard from "../components/ServiceCard"
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from "../animations"

const index = () => {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        i am fresh graduate. I am also a Freelance Web Developer with 2 years experience. The number of projects from clients that I have worked on is around 22 projects. For more details about me, download my resume.
      </h5>
      <div className="p-4 mt-5 bg-gray-400 flex-grow dark:bg-dark-100" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What can I do</h6>
        <motion.div variants={stagger} initial="initial" animate="animate" className="grid lg:grid-cols-2 gap-6">
          {
            services.map((service, index) => (
              <motion.div variants={fadeInUp} className="col-span-2 p-2 md:col-span-1 bg-gray-200 rounded-lg dark:bg-dark-200" key={index}>
                <ServiceCard service={service} />
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }

// export const getStaticProps = async (context: GetStaticPathsContext) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }