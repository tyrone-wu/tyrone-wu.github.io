interface Project {
  name: string;
  description: string;
  thumbnail: string;
  stack: string[];
  link: string;
}

export const data: Project[] = [
  {
    name: "K8s Cluster Deployment Inventory",
    description:
      "An automated kubernetes, multi-node cluster deployment for an inventory webapp.",
    thumbnail: "k8s-deploy.jpg",
    stack: [
      "Ansible",
      "AWS EC2",
      "Docker",
      "Kubernetes",
      "Locust",
      "microk8s",
      "Terraform",
    ],
    link: "https://github.com/tyrone-wu/footwear-webstore-cloudops",
  },
  {
    name: "Research Exchange",
    description:
      "A Stack Exchange-like webapp that hosts a crowd-review platform for research publications.",
    thumbnail: "research-exchange.jpg",
    stack: [
      "Java",
      "Micronaut",
      "Next.js",
      "Oracle Cloud",
      "Typescript",
      "React",
    ],
    link: "https://github.com/tyrone-wu/ResearchExchange",
  },
  {
    name: "One Wallet",
    description:
      "A webapp that centralizes personal finance information with customizable interfaces.",
    thumbnail: "one-wallet.jpg",
    stack: ["CSS", "Flask", "HTML", "Python", "React", "Typescript"],
    link: "https://github.com/SelenaChen123/OneWallet",
  },
  // {
  //   name: "Deployment & Monitoring Pipeline Tool",
  //   description: "An Ansible wrapper CLI tool that conforms to GitHub Action's yaml specification for deploying and monitoring locally hosted web apps.",
  //   thumbnail: "pipeline-tool.png",
  //   stack: [ "Ansible", "Bash/Shell", "Javascript", "Node.js", "Redis", "Ubuntu", "VirtualBox" ],
  //   link: "https://github.com/tyrone-wu/deploy-monitor-pipline-tool",
  // },
];
