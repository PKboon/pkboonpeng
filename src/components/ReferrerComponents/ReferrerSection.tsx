"use client";

import { ReferrerObject } from "@/types";
import { InfiniteSlidingLoop, ReferrerCard } from "@/components";

export function ReferrerSection() {
	const referrers: ReferrerObject[] = [
		{
			id: "referrer1",
			name: "Mychal Chin",
			position: "VP of Professional Services at Sharpen",
			relationship: "June 17, 2024, Mychal managed PK directly",
			image: "/mike.jpeg",
			recommendation: `I met PK in early 2021, when she interviewed for an internship at Plum Voice. After her interview it was a unanimous decision, we all wanted to offer her the position on the spot. At the time, PK didn't have any familiarity with our technology stack, but she had a strong work ethic and was highly organized. She excelled on all individual projects we assigned her and played key roles on team projects. Her performance as an intern was so strong, we created a position to hire her when the company wasn't ordinarily looking to hire.
				
			As a full time team member, PK took ownership of several internal applications, including tools used by our Development and Support teams. Her early roles were more front-end focused, but she reached out an expressed as desire to take on more back-end responsibilities, with a desire of becoming a more complete engineer. PK was always great about asking for the information she needed to complete her tasks. When I had the opportunity to manage her directly, I appreciated her ability to tell me directly what she needed from me.
			`,
		},
		{
			id: "referrer2",
			name: "Ian Hovde",
			position: "Software Engineering Team Lead at Sharpen",
			relationship: "March 17, 2024, Ian was senior to PK",
			image: "ian.jpeg",
			recommendation: `I have had the pleasure of working alongside PK for over 3 years and I can confidently say that she is an exceptional Software Engineer with remarkable talent for both frontend and backend development.
				
			PK is a true expert in frontend development, demonstrating an unparalleled proficiency in crafting user interfaces that are not only visually stunning but also highly functional. Her keen eye for design and understanding of UI/UX principles have greatly contributed to the success of our projects.
				
			What sets PK apart is her relentless drive for excellence. She is a self-starter who continuously seeks out opportunities to expand her skillset and tackle new challenges. Her ability to quickly grasp new concepts and technologies is truly impressive, and she consistently delivers high-quality work at an astonishing speed.
			`,
		},
		{
			id: "referrer3",
			name: "Ningxin Li",
			position: "Lead UI/UX at Sharpen",
			relationship: "February 29, 2024, Ningxin was senior to PK",
			image: "ningxin.jpeg",
			recommendation: `I highly recommend PK as an exceptional professional and teammate. Having started as my intern, she quickly proved to be the best I've ever had. PK possesses solid full stack skills, showcasing a remarkable ability to learn and adapt swiftly. Her proactive approach to problem-solving, evident in her self-learning of tools like Figma, has significantly contributed to our team's success.
			
				One of PK's standout qualities is her resourcefulness. When faced with unfamiliar challenges, she takes the initiative to independently acquire the necessary skills very fast. Her initiative extends beyond individual growth, as she played a pivotal role in making a whole design system in a very short time, showcasing her leadership and innovation.
			`,
		},
		{
			id: "referrer4",
			name: "RJ Burnham",
			position: "Founder & CEO at Consig.ai",
			relationship: "February 25, 2024, RJ was senior to PK",
			image: "rj.png",
			recommendation: `I had the distinct pleasure of working with PK Boonpeng at Plum Voice, where I joined as President and CTO. Despite being one of the newer members of our team, PK immediately stood out due to her remarkable eagerness to learn and proactive approach in contributing to various projects.

				PK possesses a rare and invaluable blend of skills that make her a quintessential full-stack developer. Her keen eye for front-end design is nothing short of amazing, seamlessly blending aesthetics with user experience. She has an intuitive understanding of how to make interfaces engaging and accessible. During my tenure, I was particularly impressed with her transition into back-end development, where she exhibited the same level of competence and dedication.
			`,
		},
		{
			id: "referrer5",
			name: "Andreea Olea",
			position: "CTO at Consig.ai",
			relationship: "February 23, 2024, Andreea was senior to PK",
			image: "andreea.png",
			recommendation: `It has been a privilege to watch PK's remarkable career growth over the past couple years, as she quickly moved beyond the expectations of her role as an intern and then front-end dev, into a well-rounded, high-impact software engineer capacity. PK's unique blend of skills, eagerness to learn, and commitment to excellence has made her an indispensable member of our team.

				What stands out most about PK is her ability to lead by example. She's not just a developer; she's a pioneer who set the bar high for front-end excellence across our organization. Her leadership in creating a comprehensive UI/UX Design System transformed our approaches to development, ensuring consistency and enhancing efficiency across all teams. This initiative alone speaks volumes of her vision and ability to drive change.
			`,
		},
		{
			id: "referrer6",
			name: "Lindsey Ranaldo",
			position: "Director of Product Development at Raxia",
			relationship: "April 7, 2023, Lindsey managed PK directly",
			image: "lindsey.jpeg",
			recommendation: `PK is a rising star in the development world. Her job title may be Junior Front-end Developer, but her skills and proven ability is much more than that. As her supervisor, I have had the privilege of witnessing her growth and development firsthand, and I can confidently say that she is an invaluable asset to the team.

				One of PK's greatest strengths is her intelligence. She consistently demonstrates an exceptional ability to analyze complex problems and develop creative solutions. Her insights and recommendations have been instrumental in driving many of Plum’s projects forward.

				PK also has a remarkable eye for detail. Her meticulousness is truly impressive and has earned her the respect and admiration of her colleagues.
			`,
		},
	];
	return (
		<InfiniteSlidingLoop
			className="h-[37rem]"
			options={{
				slidingKeyframeName: "sliding-loop",
				widthProperty: "--refs-w",
			}}
		>
			{referrers.map((referrer) => (
				<ReferrerCard referrer={referrer} key={referrer.id}>
					{referrer.recommendation}
				</ReferrerCard>
			))}
		</InfiniteSlidingLoop>
	);
}
