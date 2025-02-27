// import {
  
//   FooterIcon,
  
// } from "flowbite-react";
// import { BsInstagram, BsGithub } from "react-icons/bs";
import {InstagramOutlined, GithubOutlined} from "@ant-design/icons";
import {InstagramLink, GitHubLink} from "../../Data/Links.jsx";

const Footer = () => {
 
  return (
    <div className="flex-row text-center py-6 dark:bg-slate-950 dark:text-white justify-between">
      <div className="">
      <p className="container flex-col">
        Copyright &copy; 2024 The Coding Journey || Made with ❤️
        <div className="content-between">
      <a href={InstagramLink} target="blank" >
      <InstagramOutlined className="text-3xl"/>
      </a>
      <a href={GitHubLink} target="blank"><GithubOutlined className="text-3xl"/></a>
      </div>
      </p>
      
      
      </div>
    </div>
  );
};

export default Footer;
