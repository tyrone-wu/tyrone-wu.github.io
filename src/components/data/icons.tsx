interface TechIconProps {
  icon: string;
  link: string;
};

const iconPath = "/assets/icons/";

export const iconMap = new Map<string, TechIconProps>([
  ["Ansible", { 
    icon: `${iconPath}` + "ansible.svg", 
    link: "https://www.ansible.com/" 
  }],
  ["AWS", { 
    icon: `${iconPath}` + "aws.svg", 
    link: "https://aws.amazon.com/" 
  }],
  ["AWS Certified Developer - Associate", { 
    icon: `${iconPath}` + "dva-c02.png", 
    link: "https://www.credly.com/badges/1b91c4d9-176e-48df-aa24-1a95d0a5f530/public_url"
  }],
  ["AWS EC2", { 
    icon: `${iconPath}` + "aws.svg", 
    link: "https://aws.amazon.com/ec2/" 
  }],
  ["Bash/Shell", { 
    icon: `${iconPath}` + "bash.svg", 
    link: "https://www.gnu.org/software/bash/" 
  }],
  ["C++", { 
    icon: `${iconPath}` + "cpp.svg", 
    link: "https://cplusplus.com/" 
  }],
  ["CSS", { 
    icon: `${iconPath}` + "css.svg", 
    link: "https://www.w3.org/Style/CSS/Overview.en.html" 
  }],
  ["Chakra UI", { 
    icon: `${iconPath}` + "chakraui.png", 
    link: "https://chakra-ui.com/" 
  }],
  ["Docker", { 
    icon: `${iconPath}` + "docker.svg", 
    link: "https://www.docker.com/" 
  }],
  ["Figma", { 
    icon: `${iconPath}` + "figma.svg", 
    link: "https://www.figma.com/" 
  }],
  ["Flask", { 
    icon: `${iconPath}` + "flask.svg", 
    link: "https://flask.palletsprojects.com/" 
  }],
  ["HTML", { 
    icon: `${iconPath}` + "html.svg", 
    link: "https://html.com/" 
  }],
  ["Java", { 
    icon: `${iconPath}` + "java.svg", 
    link: "https://www.java.com/" 
  }],
  ["Javascript", { 
    icon: `${iconPath}` + "javascript.svg", 
    link: "https://www.javascript.com/" 
  }],
  ["Kubernetes", { 
    icon: `${iconPath}` + "kubernetes.svg", 
    link: "https://kubernetes.io/" 
  }],
  ["Locust", { 
    icon: `${iconPath}` + "locust.png", 
    link: "https://locust.io/" 
  }],
  ["microk8s", {
    icon: `${iconPath}` + "microk8s.png", 
    link: "https://microk8s.io/"
  }],
  ["Micronaut", {
    icon: `${iconPath}` + "micronaut.png", 
    link: "https://micronaut.io/"
  }],
  ["MySQL", {
    icon: `${iconPath}` + "mysql.svg", 
    link: "https://www.mysql.com/"
  }],
  ["Next.js", {
    icon: `${iconPath}` + "nextjs.svg", 
    link: "https://nextjs.org/"
  }],
  ["Node.js", {
    icon: `${iconPath}` + "nodejs.svg", 
    link: "https://nodejs.org/"
  }],
  ["Oracle Cloud", {
    icon: `${iconPath}` + "oci.png", 
    link: "https://www.oracle.com/cloud/"
  }],
  ["Oracle DB", {
    icon: `${iconPath}` + "oracle-db.png", 
    link: "https://www.oracle.com/database/"
  }],
  ["Python", {
    icon: `${iconPath}` + "python.svg", 
    link: "https://www.python.org/"
  }],
  ["React", {
    icon: `${iconPath}` + "react.svg", 
    link: "https://react.dev/"
  }],
  ["Postman", {
    icon: `${iconPath}` + "postman.svg", 
    link: "https://www.postman.com/"
  }],
  ["Rust", {
    icon: `${iconPath}` + "rust.svg", 
    link: "https://www.rust-lang.org/"
  }],
  ["Redis", {
    icon: `${iconPath}` + "redis.svg", 
    link: "https://redis.io/"
  }],
  ["Spring Boot", {
    icon: `${iconPath}` + "spring.svg", 
    link: "https://spring.io/"
  }],
  ["Terraform", { 
    icon: `${iconPath}` + "terraform.svg", 
    link: "https://www.terraform.io/" 
  }],
  ["Typescript", { 
    icon: `${iconPath}` + "typescript.svg", 
    link: "https://www.typescriptlang.org/" 
  }],
  ["Ubuntu", { 
    icon: `${iconPath}` + "ubuntu.svg", 
    link: "https://ubuntu.com/" 
  }],
  ["Unix/Linux", { 
    icon: `${iconPath}` + "linux.svg", 
    link: "https://www.linux.org/" 
  }],
  ["Vagrant", { 
    icon: `${iconPath}` + "vagrant.svg", 
    link: "https://www.vagrantup.com/" 
  }],
  ["VirtualBox", { 
    icon: `${iconPath}` + "virtualbox.png", 
    link: "https://www.virtualbox.org/" 
  }],
]);