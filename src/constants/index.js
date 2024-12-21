export const PROJECTS = [
  {
    title: "Multi-Cloud Kubernetes Orchestration",
    image: project1,
    description:
      "Led the deployment and management of Kubernetes clusters across AWS EKS, Azure AKS, and GCP GKE for a multi-national client. Automated infrastructure provisioning using Terraform and Ansible, reducing deployment time by 40%. Configured Prometheus and Grafana for application monitoring, enabling real-time insights and proactive issue resolution. Integrated Loki and Promtail for centralized log aggregation, improving debugging efficiency by 60%. Leveraged KEDA for auto-scaling workloads and deployed HTTP add-ons for improved scalability and reliability.",
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Grafana", "Prometheus", "Loki", "KEDA", "HTTP Add-ons"],
  },
  {
    title: "CI/CD Pipeline with APM Integration",
    image: project2,
    description:
      "Designed and implemented robust CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps, streamlining application deployments for over 50 microservices. Integrated Application Performance Monitoring (APM) tools with Grafana, Prometheus, and Tempo, enhancing observability and reducing downtime by 25%. Automated code quality checks using SonarQube and integrated security scans, ensuring compliance with industry standards. Deployed Kubernetes clusters on Azure AKS for application orchestration and scalability.",
    technologies: ["CI/CD", "Jenkins", "GitHub Actions", "Azure DevOps", "Grafana", "Prometheus", "Tempo", "SonarQube", "Terraform", "Azure AKS"],
  },
  {
    title: "Cloud-Native Monitoring System",
    image: project3,
    description:
      "Implemented a comprehensive cloud-native monitoring system across AWS and Azure for a financial services client, handling over 200,000 metrics per minute. Designed custom Grafana dashboards to visualize key performance indicators, enabling faster decision-making. Configured Prometheus, Kibana, and CloudWatch for advanced monitoring and integrated Loki and Tempo for centralized log and trace management, reducing Mean Time to Recovery (MTTR) by 35%.",
    technologies: ["AWS", "Azure", "Grafana", "Prometheus", "Loki", "Tempo", "Kibana", "CloudWatch"],
  },
  {
    title: "E-Commerce Infrastructure on AWS",
    image: project4,
    description:
      "Architected a scalable e-commerce platform on AWS for a high-traffic online store with over 1 million daily users. Automated infrastructure provisioning using Terraform, ensuring consistent deployments across development and production environments. Configured Kubernetes for container orchestration on EKS and leveraged KEDA for dynamic workload scaling. Implemented Prometheus, Grafana, and Tempo for monitoring, tracing, and alerting, reducing infrastructure costs by 20% through proactive optimization.",
    technologies: ["AWS", "Terraform", "Kubernetes", "EKS", "Grafana", "Prometheus", "Tempo", "Ansible", "KEDA"],
  },
];
