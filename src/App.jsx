import { CustomerReviews, Footer, Hero,
  PopularProducts, SuperQuality, Services, SpecialOffers, Subscribe
} from "./sections";
import Nav from "./components/Nav";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <motion.section
      className="padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <PopularProducts/>
    </motion.section>
    <motion.section
      className="padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <SuperQuality/>
    </motion.section>
    <motion.section
      className="padding-x py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <Services/>
    </motion.section>
    <motion.section
      className="padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <SpecialOffers/>
    </motion.section>
    <motion.section
      className="bg-pale-blue padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <CustomerReviews/>
    </motion.section>
    <motion.section
      className="padding-x sm:py-32 py-16 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <Subscribe/>
    </motion.section>
    <motion.section
      className="bg-black padding-x padding-t pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <Footer/>
    </motion.section>

  </main>

);

export default App
