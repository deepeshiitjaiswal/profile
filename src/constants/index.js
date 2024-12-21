export const PROJECTS = [
  {
    title: "Multi-Cloud Kubernetes Orchestration",
    image: project1,
    description:
      "Led the deployment and management of Kubernetes clusters across AWS EKS, Azure AKS, and GCP GKE for a multi-national client. Integrated KEDA with Kubernetes to enable dynamic scaling of applications based on event-driven triggers, improving resource utilization by 50%. Automated infrastructure provisioning using Terraform and Ansible, reducing deployment time by 40%. Configured Prometheus, Grafana, and Tempo for observability and integrated Loki for centralized log aggregation, enhancing debugging efficiency by 60%. Deployed Kibana alongside Elasticsearch for advanced log search and visualization, addressing compliance and auditing requirements.",
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "EKS",
      "AKS",
      "GKE",
      "Terraform",
      "Ansible",
      "Grafana",
      "Prometheus",
      "Tempo",
      "Loki",
      "Kibana",
      "KEDA",
    ],
  },
  {
    title: "CI/CD Pipeline with APM Integration",
    image: project2,
    description:
      "Designed and implemented scalable CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps, optimizing deployment workflows for over 50 microservices. Integrated Application Performance Monitoring (APM) with Grafana, Prometheus, and Tempo, enhancing observability and reducing downtime by 25%. Automated code quality checks with SonarQube and implemented security scans to comply with industry standards. Configured HTTP Add-on in Kubernetes to improve application scalability under high traffic scenarios, ensuring consistent performance.",
    technologies: [
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
      "Azure DevOps",
      "Grafana",
      "Prometheus",
      "Tempo",
      "SonarQube",
      "Kubernetes",
      "HTTP Add-on",
    ],
  },
  {
    title: "Cloud-Native Monitoring System",
    image: project3,
    description:
      "Implemented a cloud-native monitoring system for AWS and Azure to support a large-scale financial services platform handling over 200,000 metrics per minute. Deployed Prometheus and Tempo for metrics and tracing, integrated Loki and Kibana for centralized logging, and designed custom Grafana dashboards to visualize real-time application performance. Configured Azure Kubernetes Service (AKS) with dynamic scaling using KEDA, achieving a 35% reduction in Mean Time to Recovery (MTTR). Enabled HTTP Add-on in AKS to optimize API latency under peak loads.",
    technologies: [
      "AWS",
      "Azure",
      "Grafana",
      "Prometheus",
      "Tempo",
      "Loki",
      "Kibana",
      "CloudWatch",
      "KEDA",
      "Azure Kubernetes Service (AKS)",
      "HTTP Add-on",
    ],
  },
  {
    title: "E-Commerce Infrastructure on AWS",
    image: project4,
    description:
      "Architected a scalable e-commerce platform on AWS for an online store with over 1 million daily users. Automated infrastructure provisioning using Terraform and configured Kubernetes (EKS) for container orchestration, ensuring a 99.9% uptime SLA. Integrated Prometheus, Grafana, and Tempo for real-time monitoring and tracing, and implemented Loki for log aggregation. Used KEDA to dynamically scale services based on HTTP Add-on metrics, reducing operational costs by 20%. Deployed Kibana for advanced log visualization, improving troubleshooting and operational insights.",
    technologies: [
      "AWS",
      "Terraform",
      "Kubernetes",
      "EKS",
      "Grafana",
      "Prometheus",
      "Tempo",
      "Loki",
      "Kibana",
      "KEDA",
      "HTTP Add-on",
    ],
  },
];
