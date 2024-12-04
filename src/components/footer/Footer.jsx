// import {
  
//   FooterIcon,
  
// } from "flowbite-react";
// import { BsInstagram, BsGithub } from "react-icons/bs";
import {InstagramOutlined, GithubOutlined} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="flex-row text-center py-6 dark:bg-slate-950 dark:text-white">
      <div>
      <p className="container flex">
        Copyright &copy; 2024 The Coding Journey || Made with ❤️
      </p>
      </div>
      <div>
      <InstagramOutlined />
      <GithubOutlined />
      </div>
    </footer>
  );
};

export default Footer;
