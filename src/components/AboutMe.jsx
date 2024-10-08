import React from "react";
import { Homepage } from "../constants/constant";
import { identity } from "../constants/constant";
import Spline from "@splinetool/react-spline";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { LinkPreview } from "./ui/link-preview";



const AboutMe = () => {
	return (
		<section className='mt-10 max-w-2xl mx-auto px-6'>
			<div className='flex sm:flex-row flex-col'>
				<div className='flex flex-col mb-4'>
					<h1 className='font-bold text-3xl mb-1'>{identity.name}</h1>
					<p className='opacity-60 mb-10'>{Homepage.role}</p>
					<div className='group flex justify-center gap-12 w-fit'>
						<div>
							<a
								href='https://github.com/rishiiiidha'
								className='flex items-center gap-2 opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-opacity'
								target='_blank'
							>
								<FaGithub width={25} height={25} />
							</a>
						</div>
						<div>
							<a
								href='https://leetcode.com/u/rissh/'
								className='flex items-center gap-2 opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-opacity'
								target='_blank'
							>
								<SiLeetcode width={25} height={25} />
							</a>
						</div>
						<div>
							<a
								href='https://www.codechef.com/users/rishidhaa'
								className='flex items-center gap-2 opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-opacity'
								target='_blank'
							>
								<SiCodechef width={25} height={25} />
							</a>
						</div>
						<div>
							<a
								href='https://codeforces.com/profile/rishidhaa'
								className='flex items-center gap-2 opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-opacity'
								target='_blank'
							>
								<SiCodeforces width={25} height={25} />
							</a>
						</div>
						<div>
							<a
								href='https://www.linkedin.com/in/rishidha-addanki/'
								className='flex items-center gap-2 opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-opacity'
								target='_blank'
							>
								<FaLinkedinIn width={25} height={25} />
							</a>
						</div>
					</div>
				</div>
				<div className='h-screen w-full'>
					<div className='h-screen w-full flex xs:flex-col'>
						<div>
							<Spline scene='https://prod.spline.design/NLx372xh4258Wxwq/scene.splinecode' />
						</div>
					</div>
				</div>
				
      </div>
      
		</section>
	);
};

export default AboutMe;

