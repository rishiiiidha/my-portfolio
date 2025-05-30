import React, { useState } from "react";
import { Homepage } from "../constants/constant";
import { identity } from "../constants/constant";
import Spline from "@splinetool/react-spline";
import { FaGithub } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiCodeforces } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";

const AboutMe = () => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<section className='mt-10 max-w-2xl mx-auto px-6'>
			<div className='flex sm:flex-row flex-col gap-8'>
				<div className='flex flex-col mb-4 relative flex-1'>
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="relative"
					>
						<h1 className='font-bold text-3xl mb-1 mt-8 relative'>{identity.name}</h1>
					</motion.div>
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="max-w-[500px]"
					>
						<p className='opacity-60 mb-10 text-[15px] relative  whitespace-nowrap overflow-hidden text-ellipsis'>{Homepage.role}</p>
						
					</motion.div>
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='group flex justify-center gap-12 w-fit relative z-10'
					>
						<div>
							<LinkPreview
								url='https://github.com/rishiiiidha'
								className='flex items-center gap-2 opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-opacity'
								target='_blank'
								aria-label="GitHub"
							>
								<FaGithub size={25} />
							</LinkPreview>
						</div>
						<div>
							<LinkPreview
								url='https://leetcode.com/u/rishidhaa/'
								className='flex items-center gap-2 opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-opacity'
								target='_blank'
								aria-label="LeetCode"
							>
								<SiLeetcode size={25} />
							</LinkPreview>
						</div>
						<div>
							<LinkPreview
								url='https://www.codechef.com/users/rishidhaa'
								className='flex items-center gap-2 opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-opacity'
								target='_blank'
								aria-label="CodeChef"
							>
								<SiCodechef size={25} />
							</LinkPreview>
						</div>
						<div>
							<LinkPreview
								url='https://codeforces.com/profile/rishidhaa'
								className='flex items-center gap-2 opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-opacity'
								target='_blank'
								aria-label="CodeForces"
							>
								<SiCodeforces size={25} />
							</LinkPreview>
						</div>
						<div>
							<LinkPreview
								url='https://www.linkedin.com/in/rishidha-addanki/'
								className='flex items-center gap-2 opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-opacity'
								target='_blank'
								aria-label="LinkedIn"
							>
								<FaLinkedinIn size={25} />
							</LinkPreview>
						</div>
					</motion.div>
				</div>
				<div className='h-full w-full flex-1'>
					<div className='h-full w-full flex xs:flex-col'>
						<div className="relative w-full h-full">
							{isLoading && (
								<div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
									<div className="flex flex-col items-center gap-4">
										<div className="relative w-16 h-16">
											<div className="absolute inset-0 border-4 border-black/20 rounded-full"></div>
											<div className="absolute inset-0 border-4 border-t-black border-r-transparent border-b-transparent border-l-transparent rounded-full animate-[spin_1s_linear_infinite]"></div>
										</div>
									</div>
								</div>
							)}
							<Spline 
								scene='https://prod.spline.design/NLx372xh4258Wxwq/scene.splinecode'
								onLoad={() => setIsLoading(false)}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;

