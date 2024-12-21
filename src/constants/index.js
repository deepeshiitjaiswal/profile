import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate DevOps Engineer with over 8 years of experience in automating, architecting, and managing cloud infrastructure. I specialize in leveraging AWS, Azure, and GCP services, Kubernetes orchestration, CI/CD pipelines, and advanced monitoring solutions like Grafana and Prometheus. I thrive on solving complex challenges and creating scalable solutions to streamline workflows and enhance system performance.`

export const ABOUT_TEXT = `With a Bachelor of Engineering (BE) from RGPV University, I bring a solid technical foundation and 8 years of experience as a DevOps Engineer. I have worked extensively on projects spanning cloud platforms like AWS, GCP, and Azure, integrating Kubernetes for container orchestration, and implementing robust CI/CD pipelines. My expertise includes setting up advanced monitoring solutions using Prometheus, Grafana, and Application Performance Monitoring (APM) tools. I am dedicated to staying ahead in the ever-evolving technology landscape and delivering high-quality, scalable solutions for complex challenges.`

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Lead DevOps Engineer",
    company: "TietoEVRY",
    description: `Architected and automated multi-cloud infrastructure on AWS, Azure, and GCP. Implemented Kubernetes clusters with advanced monitoring and logging solutions. Designed CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps. Integrated Grafana with Prometheus for application performance monitoring and alerting.`,
    technologies: ["AWS", "Azure", "GCP", "Pulumi", "Kubernetes", "Prometheus", "Grafana", "Terraform"],
  },
  {
    year: "2021 - 2023",
    role: "DevOps Expert",
    company: "EzopsInc",
    description: `Led the creation of Kubernetes-based environments on Azure and AWS. Automated infrastructure deployment using Terraform and Ansible. Developed CI/CD workflows to streamline application deployment. Configured Prometheus and Loki for monitoring and log aggregation.`,
    technologies: ["Kubernetes", "Terraform", "CI/CD", "Ansible", "Prometheus", "Loki", "Azure"],
  },
  {
    year: "2021 - 2021",
    role: "Cloud DevOps Engineer",
    company: "Diverse Lynx",
    description: `Deployed containerized applications on GKE and AKS. Integrated Grafana dashboards with data from Prometheus and CloudWatch for real-time monitoring. Automated security compliance checks using custom Ansible playbooks.`,
    technologies: ["GCP", "Azure", "AKS", "GKE", "CloudWatch", "Grafana", "Ansible"],
  },
  {
    year: "2020 - 2021",
    role: "DevOps Engineer",
    company: "AuthBridge",
    description: `Designed and maintained AWS-based environments. Built CI/CD pipelines using AWS CodePipeline and Jenkins. Configured ELK stack for centralized logging and Grafana for real-time performance monitoring.`,
    technologies: ["AWS", "ELK Stack", "Jenkins", "Grafana", "Prometheus"],
  },
];

export const PROJECTS = [
  {
    title: "Multi-Cloud Kubernetes Orchestration",
    image: project1,
    description:
      "Deployed and managed Kubernetes clusters across AWS EKS, Azure AKS, and GCP GKE. Configured Prometheus and Grafana for application monitoring and integrated Loki for log aggregation. Automated infrastructure provisioning using Terraform and Ansible.",
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Grafana", "Prometheus"],
  },
  {
    title: "CI/CD Pipeline with APM Integration",
    image: project2,
    description:
      "Developed robust CI/CD pipelines using Jenkins and GitHub Actions for seamless application deployments. Integrated Application Performance Monitoring (APM) with Grafana and Prometheus for enhanced observability. Automated code quality checks and security scans.",
    technologies: ["CI/CD", "Jenkins", "GitHub Actions", "Grafana", "Prometheus", "Terraform"],
  },
  {
    title: "Cloud-Native Monitoring System",
    image: project3,
    description:
      "Implemented a cloud-native monitoring system on AWS and Azure. Designed custom Grafana dashboards to visualize metrics and alerts from Prometheus and CloudWatch. Enabled centralized logging using Loki and Promtail.",
    technologies: ["AWS", "Azure", "Grafana", "Prometheus", "Loki", "CloudWatch"],
  },
  {
    title: "E-Commerce Infrastructure on AWS",
    image: project4,
    description:
      "Architected a scalable e-commerce platform on AWS. Automated infrastructure provisioning with Terraform and configured Kubernetes for container orchestration. Set up monitoring and alerting using Prometheus and Grafana.",
    technologies: ["AWS", "Terraform", "Kubernetes", "Grafana", "Prometheus"],
  },
];

export const CONTACT = {
  address: "Chandigarh, India",
  phoneNo: "+91-62600-09652",
  email: "deepeshiitjaiswal786@gmail.com",
};
