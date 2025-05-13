import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["React", "Node.js", "Express", "MongoDB"],
    loop: 0,
    delaySpeed: 2000,
  });

  return (
    <>
      <motion.div
        className="home-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="home-heading">
          Hi, I'm <span className="name">Kavinkumar</span>
        </h1>

        <motion.p
          className="home-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          A passionate <span className="highlight">Full Stack Developer</span> skilled in{" "}
          <motion.span
            className="typewriter"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            {text}
          </motion.span>
          <Cursor cursorColor="#facc15" />
        </motion.p>

        <a
          href="https://github.com/kavinkumar-mca-23"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          Visit My GitHub
        </a>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;700;800&family=Fira+Code:wght@400;600&display=swap');

        .home-container {
          font-family: 'Outfit', sans-serif;
          height: 100vh;
          background: linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          text-align: center;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .home-heading {
          font-size: 3rem;
          color: #facc15;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .name {
          color: #fbbf24;
        }

        .home-subtitle {
          font-size: 1.2rem;
          color: #e5e7eb;
          max-width: 700px;
          margin: 0 auto 20px;
          line-height: 1.6;
        }

        .highlight {
          color: #facc15;
          font-weight: 700;
        }

        .typewriter {
          color: #facc15;
          font-weight: bold;
          font-family: 'Fira Code', monospace;
        }

        .github-button {
          background-color: #facc15;
          color: black;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 999px;
          text-decoration: none;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .github-button:hover {
          background-color: #fde047;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .home-heading {
            font-size: 2.2rem;
          }

          .home-subtitle {
            font-size: 1rem;
          }

          .github-button {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .home-heading {
            font-size: 1.8rem;
          }

          .home-subtitle {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
