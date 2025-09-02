"use client";

import LogoLoop from "../components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiSpringboot,
  SiPython,
  SiDjango,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGooglecloud,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGraphql,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiNestjs,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiGit,
  SiGithub,
  SiJenkins,
  SiGithubactions,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiRabbitmq,
  SiApachekafka,
  SiNginx,
  SiLinux,
  SiJavascript,
  SiOpenjdk,
  SiSharp,
  SiGo,
  SiRust,
  SiPhp,
  SiRuby,
  SiRubyonrails,
  SiLaravel,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact className="text-[#61DAFB]" />,
    title: "React",
    ariaLabel: "React technology logo",
  },
  {
    node: <SiNextdotjs className="text-white" />,
    title: "Next.js",
    ariaLabel: "Next.js technology logo",
  },
  {
    node: <SiTypescript className="text-[#3178C6]" />,
    title: "TypeScript",
    ariaLabel: "TypeScript technology logo",
  },
  {
    node: <SiTailwindcss className="text-[#06B6D4]" />,
    title: "Tailwind CSS",
    ariaLabel: "Tailwind CSS technology logo",
  },
  {
    node: <SiNodedotjs className="text-[#339933]" />,
    title: "Node.js",
    ariaLabel: "Node.js technology logo",
  },
  {
    node: <SiMongodb className="text-[#47A248]" />,
    title: "MongoDB",
    ariaLabel: "MongoDB technology logo",
  },
  {
    node: <SiSpringboot className="text-[#6DB33F]" />,
    title: "Spring Boot",
    ariaLabel: "Spring Boot technology logo",
  },
  {
    node: <SiPython className="text-[#3776AB]" />,
    title: "Python",
    ariaLabel: "Python technology logo",
  },
  {
    node: <SiDjango className="text-[#092E20]" />,
    title: "Django",
    ariaLabel: "Django technology logo",
  },
  {
    node: <SiDocker className="text-[#2496ED]" />,
    title: "Docker",
    ariaLabel: "Docker technology logo",
  },
  {
    node: <SiKubernetes className="text-[#326CE5]" />,
    title: "Kubernetes",
    ariaLabel: "Kubernetes technology logo",
  },
  {
    node: <SiAmazon className="text-[#FF9900]" />,
    title: "AWS",
    ariaLabel: "Amazon Web Services technology logo",
  },
  {
    node: <SiGooglecloud className="text-[#4285F4]" />,
    title: "Google Cloud",
    ariaLabel: "Google Cloud technology logo",
  },

  {
    node: <SiPostgresql className="text-[#4169E1]" />,
    title: "PostgreSQL",
    ariaLabel: "PostgreSQL technology logo",
  },
  {
    node: <SiMysql className="text-[#4479A1]" />,
    title: "MySQL",
    ariaLabel: "MySQL technology logo",
  },
  {
    node: <SiRedis className="text-[#DC382D]" />,
    title: "Redis",
    ariaLabel: "Redis technology logo",
  },
  {
    node: <SiGraphql className="text-[#E10098]" />,
    title: "GraphQL",
    ariaLabel: "GraphQL technology logo",
  },
  {
    node: <SiExpress className="text-white" />,
    title: "Express.js",
    ariaLabel: "Express.js technology logo",
  },
  {
    node: <SiFastapi className="text-[#009688]" />,
    title: "FastAPI",
    ariaLabel: "FastAPI technology logo",
  },
  {
    node: <SiFlask className="text-white" />,
    title: "Flask",
    ariaLabel: "Flask technology logo",
  },
  {
    node: <SiNestjs className="text-[#E0234E]" />,
    title: "NestJS",
    ariaLabel: "NestJS technology logo",
  },
  {
    node: <SiVuedotjs className="text-[#4FC08D]" />,
    title: "Vue.js",
    ariaLabel: "Vue.js technology logo",
  },
  {
    node: <SiAngular className="text-[#DD0031]" />,
    title: "Angular",
    ariaLabel: "Angular technology logo",
  },
  {
    node: <SiSvelte className="text-[#FF3E00]" />,
    title: "Svelte",
    ariaLabel: "Svelte technology logo",
  },
  {
    node: <SiFirebase className="text-[#FFCA28]" />,
    title: "Firebase",
    ariaLabel: "Firebase technology logo",
  },
  {
    node: <SiSupabase className="text-[#3ECF8E]" />,
    title: "Supabase",
    ariaLabel: "Supabase technology logo",
  },
  {
    node: <SiVercel className="text-white" />,
    title: "Vercel",
    ariaLabel: "Vercel technology logo",
  },
  {
    node: <SiGit className="text-[#F05032]" />,
    title: "Git",
    ariaLabel: "Git technology logo",
  },
  {
    node: <SiGithub className="text-white" />,
    title: "GitHub",
    ariaLabel: "GitHub technology logo",
  },
  {
    node: <SiJenkins className="text-[#D24939]" />,
    title: "Jenkins",
    ariaLabel: "Jenkins technology logo",
  },
  {
    node: <SiGithubactions className="text-[#2088FF]" />,
    title: "GitHub Actions",
    ariaLabel: "GitHub Actions technology logo",
  },
  {
    node: <SiTerraform className="text-[#7B42BC]" />,
    title: "Terraform",
    ariaLabel: "Terraform technology logo",
  },
  {
    node: <SiPrometheus className="text-[#E6522C]" />,
    title: "Prometheus",
    ariaLabel: "Prometheus technology logo",
  },
  {
    node: <SiGrafana className="text-[#F46800]" />,
    title: "Grafana",
    ariaLabel: "Grafana technology logo",
  },
  {
    node: <SiElasticsearch className="text-[#005571]" />,
    title: "Elasticsearch",
    ariaLabel: "Elasticsearch technology logo",
  },
  {
    node: <SiRabbitmq className="text-[#FF6600]" />,
    title: "RabbitMQ",
    ariaLabel: "RabbitMQ technology logo",
  },
  {
    node: <SiApachekafka className="text-white" />,
    title: "Apache Kafka",
    ariaLabel: "Apache Kafka technology logo",
  },
  {
    node: <SiNginx className="text-[#009639]" />,
    title: "Nginx",
    ariaLabel: "Nginx technology logo",
  },
  {
    node: <SiLinux className="text-[#FCC624]" />,
    title: "Linux",
    ariaLabel: "Linux technology logo",
  },
  {
    node: <SiJavascript className="text-[#F7DF1E]" />,
    title: "JavaScript",
    ariaLabel: "JavaScript technology logo",
  },
  {
    node: <SiOpenjdk className="text-[#ED8B00]" />,
    title: "Java",
    ariaLabel: "Java technology logo",
  },
  {
    node: <SiSharp className="text-[#239120]" />,
    title: "C#",
    ariaLabel: "C# technology logo",
  },
  {
    node: <SiGo className="text-[#00ADD8]" />,
    title: "Go",
    ariaLabel: "Go technology logo",
  },
  {
    node: <SiRust className="text-white" />,
    title: "Rust",
    ariaLabel: "Rust technology logo",
  },
  {
    node: <SiPhp className="text-[#777BB4]" />,
    title: "PHP",
    ariaLabel: "PHP technology logo",
  },
  {
    node: <SiRuby className="text-[#CC342D]" />,
    title: "Ruby",
    ariaLabel: "Ruby technology logo",
  },
  {
    node: <SiRubyonrails className="text-[#CC0000]" />,
    title: "Ruby on Rails",
    ariaLabel: "Ruby on Rails technology logo",
  },
  {
    node: <SiLaravel className="text-[#FF2D20]" />,
    title: "Laravel",
    ariaLabel: "Laravel technology logo",
  },
];

export default function BrandSoul() {
  return (
    <section className="h-screen bg-black px-6 md:px-12 flex items-center">
      {/* Main content container */}
      <div className="max-w-8xl mx-auto w-full flex flex-col justify-center min-h-0">
        {/* Main text content */}
        <div className="flex-shrink-0 mb-8 lg:mb-12">
          <p className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[48px] leading-tight lg:leading-[65px] font-normal">
            Your platform should have a soul, like a high-performance soul, as
            the basis for interaction. It&apos;s just a matter of how your
            requirements can resonate and deliver seamlessly, worth crafting. I,{" "}
            <span className="text-blue-400">[Technical Lead]</span>, help to
            amplify your project&apos;s exceptional execution.
          </p>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/20 flex-shrink-0 mb-8 lg:mb-12"></div>

        {/* Tech Stack section */}
        <div className="flex-shrink-0">
          <p className="text-blue-400 text-sm font-medium mb-6 lg:mb-8 tracking-wider">
            [ USED TECH STACK]
          </p>

          {/* Animated logo loop */}
          <div className="opacity-60">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={40}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Technology stack"
              className="py-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
