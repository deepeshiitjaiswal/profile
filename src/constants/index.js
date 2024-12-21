import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
  I am a passionate DevOps Engineer with over 8 years of experience in automating, architecting, and managing cloud infrastructure. 
  I specialize in leveraging AWS, Azure, and GCP services, Kubernetes orchestration, CI/CD pipelines, and advanced monitoring solutions like Grafana, Prometheus, Kibana, and Tempo. 
  I thrive on solving complex challenges and creating scalable solutions to streamline workflows and enhance system performance.
`;

export const ABOUT_TEXT = `
  With a Bachelor of Engineering (BE) from RGPV University, I bring a solid technical foundation and 8 years of experience as a DevOps Engineer. 
  I have worked extensively on projects spanning cloud platforms like AWS, GCP, and Azure, integrating Kubernetes for container orchestration, and implementing robust CI/CD pipelines. 
  My expertise includes setting up advanced monitoring solutions using Prometheus, Grafana, Kibana, Tempo, and Application Performance Monitoring (APM) tools. 
  I am dedicated to staying ahead in the ever-evolving technology landscape and delivering high-quality, scalable solutions for complex challenges.
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Lead DevOps Engineer",
    company: "TietoEVRY",
    description: `
      Architected and automated multi-cloud infrastructure on AWS, Azure, and GCP. 
      Implemented Kubernetes clusters with advanced monitoring and logging solutions, including Prometheus, Grafana, Kibana, Loki, and Tempo. 
      Designed scalable CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps. 
      Integrated KEDA HTTP Add-on for enhanced scalability and optimized resource utilization.
    `,
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kafka",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Kibana",
      "Tempo",
      "APM",
      "Terraform",
      "Pulumi",
      "Ansible",
      "KEDA",
    ],
  },
  {
    year: "2021 - 2023",
    role: "DevOps Expert",
    company: "EzopsInc",
    description: `
      Led the creation of Kubernetes-based environments on Azure and AWS. 
      Automated infrastructure deployment using Terraform and Ansible. 
      Developed CI/CD workflows to streamline application deployment.
      
      Worked on EKS network isolation and EFS integration for secure and scalable storage solutions. 
      Implemented Spot instances in EKS for cost optimization and high availability.
      
      Integrated advanced security measures using AWS GuardDuty, CloudTrail, and WAF. 
      Configured AWS WAF to secure EKS workloads and integrated it with the ALB (Application Load Balancer). 
      Enabled AWS GuardDuty and CloudTrail for enhanced security monitoring and incident detection. 
      
      Implemented security alerting for DDoS attacks and integrated alerts with Slack for real-time notifications.
      
      Deployed and integrated complete APM (Application Performance Monitoring) for observability and troubleshooting across the infrastructure.
    `,
    technologies: [
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Ansible",
      "Prometheus",
      "Loki",
      "Kibana",
      "Azure",
      "EKS",
      "AWS",
      "GuardDuty",
      "CloudTrail",
      "WAF",
      "ALB",
      "Spot Instances",
      "Slack",
      "APM",
    ],
  },
  {
    year: "2021 - 2021",
    role: "Cloud DevOps Engineer",
    company: "Diverse Lynx",
    description: `
      Deployed containerized applications on GKE and AKS. 
      Integrated Grafana dashboards with data from Prometheus, CloudWatch, and Kibana for real-time monitoring. 
      Automated security compliance checks using custom Ansible playbooks.
    `,
    technologies: [
      "GCP",
      "Azure",
      "AKS",
      "GKE",
      "CloudWatch",
      "Grafana",
      "Prometheus",
      "Kibana",
      "Ansible",
    ],
  },
  {
    year: "2020 - 2021",
    role: "DevOps Engineer",
    company: "AuthBridge",
    description: `
      Designed and maintained AWS-based environments. 
      Built CI/CD pipelines using AWS CodePipeline and Jenkins. 
      Configured the ELK stack for centralized logging and Grafana for real-time performance monitoring.
    `,
    technologies: ["AWS", "ELK Stack", "Jenkins", "Grafana", "Prometheus"],
  },
];

export const PROJECTS = [
  {
    title: "Multi-Cloud Kubernetes Orchestration",
    image: project1,
    description: `
      Deployed and managed Kubernetes clusters across AWS EKS, Azure AKS, and GCP GKE. 
      Configured Prometheus, Grafana, and Kibana for monitoring and integrated Loki and Tempo for logging and tracing. 
      Automated infrastructure provisioning using Terraform and Ansible. 
      Enhanced scalability by integrating KEDA HTTP Add-on for dynamic workload management.
    `,
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Terraform",
      "Grafana",
      "Prometheus",
      "Kibana",
      "Loki",
      "Tempo",
      "KEDA",
    ],
  },
  {
    title: "CI/CD Pipeline with APM Integration",
    image: project2,
    description: `
      Developed robust CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps for seamless application deployments. 
      Integrated Application Performance Monitoring (APM) with Grafana, Prometheus, and Kibana for enhanced observability. 
      Automated code quality checks and security scans to ensure compliance and reliability.
    `,
    technologies: [
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
      "Azure DevOps",
      "Grafana",
      "Prometheus",
      "Kibana",
      "Terraform",
      "APM",
    ],
  },
  {
    title: "Cloud-Native Monitoring System",
    image: project3,
    description: `
      Implemented a cloud-native monitoring system on AWS and Azure. 
      Designed custom Grafana dashboards to visualize metrics and alerts from Prometheus, CloudWatch, and Kibana. 
      Enabled centralized logging using Loki, Tempo, and Promtail for improved traceability.
    `,
    technologies: [
      "AWS",
      "Azure",
      "Grafana",
      "Prometheus",
      "Kibana",
      "Loki",
      "Tempo",
      "CloudWatch",
    ],
  },
  {
    title: "E-Commerce Infrastructure on AWS",
    image: project4,
    description: `
      Architected a scalable e-commerce platform on AWS. 
      Automated infrastructure provisioning with Terraform and configured Kubernetes for container orchestration. 
      Set up advanced monitoring and alerting using Prometheus, Grafana, Kibana, and Tempo. 
      Integrated KEDA HTTP Add-on to manage high traffic effectively.
    `,
    technologies: [
      "AWS",
      "Terraform",
      "Kubernetes",
      "Grafana",
      "Prometheus",
      "Kibana",
      "Tempo",
      "KEDA",
    ],
  },
];

export const CONTACT = {
  address: "Noida,UP India",
  phoneNo: "+91-62600-09652",
  email: "deepeshiitjaiswal786@gmail.com",
};
