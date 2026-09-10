import {
  FaJs, FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt, FaGithub, FaApple, FaAndroid,
  FaHtml5, FaCss3Alt, FaTerminal,
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiDjango, SiFastapi, SiRuby, SiRubyonrails, SiTailwindcss, SiGooglecloud, SiDigitalocean,
  SiNginx, SiGithubactions, SiSwift, SiKotlin, SiExpo, SiFirebase, SiJest, SiSelenium,
} from 'react-icons/si';

const skills = [
  {
    id: 'js', name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400',
  },
  {
    id: 'ts', name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-400',
  },
  {
    id: 'react', name: 'React', icon: <FaReact />, color: 'text-sky-400',
  },
  {
    id: 'next', name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white',
  },
  {
    id: 'redux', name: 'Redux', icon: <SiRedux />, color: 'text-purple-400',
  },
  {
    id: 'node', name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-400',
  },
  {
    id: 'express', name: 'Express', icon: <SiExpress />, color: 'text-gray-200',
  },
  {
    id: 'mongo', name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500',
  },
  {
    id: 'python', name: 'Python', icon: <FaPython />, color: 'text-yellow-300',
  },
  {
    id: 'django', name: 'Django', icon: <SiDjango />, color: 'text-emerald-400',
  },
  {
    id: 'fastapi', name: 'FastAPI', icon: <SiFastapi />, color: 'text-teal-300',
  },
  {
    id: 'ruby', name: 'Ruby', icon: <SiRuby />, color: 'text-red-400',
  },
  {
    id: 'rails', name: 'Rails', icon: <SiRubyonrails />, color: 'text-rose-400',
  },
  {
    id: 'pg', name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-300',
  },
  {
    id: 'mysql', name: 'MySQL', icon: <SiMysql />, color: 'text-sky-300',
  },
  {
    id: 'redis', name: 'Redis', icon: <SiRedis />, color: 'text-red-500',
  },
  {
    id: 'firebase', name: 'Firebase', icon: <SiFirebase />, color: 'text-amber-400',
  },
  {
    id: 'rn', name: 'React Native', icon: <FaReact />, color: 'text-cyan-300',
  },
  {
    id: 'expo', name: 'Expo', icon: <SiExpo />, color: 'text-white',
  },
  {
    id: 'ios', name: 'iOS · Swift', icon: <SiSwift />, color: 'text-orange-400',
  },
  {
    id: 'android', name: 'Android · Kotlin', icon: <SiKotlin />, color: 'text-violet-400',
  },
  {
    id: 'apple', name: 'App Store', icon: <FaApple />, color: 'text-gray-100',
  },
  {
    id: 'play', name: 'Google Play', icon: <FaAndroid />, color: 'text-green-400',
  },
  {
    id: 'aws', name: 'AWS', icon: <FaAws />, color: 'text-orange-300',
  },
  {
    id: 'gcp', name: 'Google Cloud', icon: <SiGooglecloud />, color: 'text-blue-400',
  },
  {
    id: 'do', name: 'DigitalOcean', icon: <SiDigitalocean />, color: 'text-sky-400',
  },
  {
    id: 'docker', name: 'Docker', icon: <FaDocker />, color: 'text-blue-400',
  },
  {
    id: 'nginx', name: 'Nginx', icon: <SiNginx />, color: 'text-green-500',
  },
  {
    id: 'gha', name: 'CI/CD · GitHub Actions', icon: <SiGithubactions />, color: 'text-sky-300',
  },
  {
    id: 'tw', name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-400',
  },
  {
    id: 'html', name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-400',
  },
  {
    id: 'css', name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-400',
  },
  {
    id: 'jest', name: 'Jest', icon: <SiJest />, color: 'text-pink-400',
  },
  {
    id: 'sel', name: 'Selenium', icon: <SiSelenium />, color: 'text-green-300',
  },
  {
    id: 'git', name: 'Git', icon: <FaGitAlt />, color: 'text-orange-300',
  },
  {
    id: 'gh', name: 'GitHub', icon: <FaGithub />, color: 'text-white',
  },
  {
    id: 'cli', name: 'Linux / CLI', icon: <FaTerminal />, color: 'text-emerald-300',
  },
];

export default skills;
