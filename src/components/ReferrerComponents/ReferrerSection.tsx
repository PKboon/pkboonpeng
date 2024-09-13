"use client";

import { ReferrerObject } from "@/types";
import { ReferrerCard } from "@/components";
import { Flex, Group, ScrollArea } from "@mantine/core";

export function ReferrerSection() {
	const referrers: ReferrerObject[] = [
		{
			id: "referrer1",
			name: "Mychal Chin",
			position: "VP of Professional Services at Sharpen",
			relationship: "June 17, 2024, Mychal managed PK directly",
			image: "https://media.licdn.com/dms/image/v2/C4D03AQEadOVNPiu-aw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1593538969915?e=1731542400&v=beta&t=or9JZEsCA-i84UnLrPu0lVeDx27PZRSgxJ_R5jsxc00",
			recommendation: `I met PK in early 2021, when she interviewed for an internship at Plum Voice. After her interview it was a unanimous decision, we all wanted to offer her the position on the spot. At the time, PK didn't have any familiarity with our technology stack, but she had a strong work ethic and was highly organized. She excelled on all individual projects we assigned her and played key roles on team projects. Her performance as an intern was so strong, we created a position to hire her when the company wasn't ordinarily looking to hire.
			
				As a full time team member, PK took ownership of several internal applications, including tools used by our Development and Support teams. Her early roles were more front-end focused, but she reached out an expressed as desire to take on more back-end responsibilities, with a desire of becoming a more complete engineer. PK was always great about asking for the information she needed to complete her tasks. When I had the opportunity to manage her directly, I appreciated her ability to tell me directly what she needed from me.
				
				Some highlight from her time with Plum:
				- Took a leading role on a team project, due to her strong organizational skills
				- Learned Figma and contributed to improving our UI/UX design process
				- Built a visual design system
				- Suggested workflow improvements in our code review and source control processes
				- Contributed to maintaining a productive and positive team culture
				- Built the company's first Dialogflow-based SMS application
				- Built a site consolidating internal Support tools into a single portal
				- Developed features and bug-fixes for our core product, Plum Fuse
				- Contributed and participated in our skills development program
					
				PK was an extremely valuable member of our team and I'm excited to see how she continues to grow.
			`,
		},
		{
			id: "referrer2",
			name: "Ian Hovde",
			position: "Software Engineering Team Lead at Sharpen",
			relationship: "March 17, 2024, Ian was senior to PK",
			image: "https://media.licdn.com/dms/image/v2/D4E03AQE3MA17l51Z8A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1697827789632?e=1731542400&v=beta&t=pPKphpFfNjO1qbRcHKRZeHZ1TMjowudK_R3qk-MOj0U",
			recommendation: `I have had the pleasure of working alongside PK for over 3 years and I can confidently say that she is an exceptional Software Engineer with remarkable talent for both frontend and backend development.
			
				PK is a true expert in frontend development, demonstrating an unparalleled proficiency in crafting user interfaces that are not only visually stunning but also highly functional. Her keen eye for design and understanding of UI/UX principles have greatly contributed to the success of our projects.
				
				What sets PK apart is her relentless drive for excellence. She is a self-starter who continuously seeks out opportunities to expand her skillset and tackle new challenges. Her ability to quickly grasp new concepts and technologies is truly impressive, and she consistently delivers high-quality work at an astonishing speed.
				
				Beyond her technical expertise, PK is also a valuable team player who is always willing to lend a helping hand and offer innovative solutions to complex problems. Her collaborative nature and willingness to go above and beyond make her a pleasure to work with.
				
				In summary, PK is a top-notch software engineer who brings a unique blend of technical prowess, design acumen, and unwavering dedication to every project she undertakes. I wholeheartedly recommend PK for any software engineering role.
			`,
		},
		{
			id: "referrer3",
			name: "Ningxin Li",
			position: "Lead UI/UX at Sharpen",
			relationship: "February 29, 2024, Ningxin was senior to PK",
			image: "https://media.licdn.com/dms/image/v2/C4E03AQF-3GcQR8CxVg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1656097858003?e=1731542400&v=beta&t=1_0AXXL_Y8QYzuPz8OYnA9GlxNf1bKGSjvrpFLGD_K0",
			recommendation: `I highly recommend PK as an exceptional professional and teammate. Having started as my intern, she quickly proved to be the best I've ever had. PK possesses solid full stack skills, showcasing a remarkable ability to learn and adapt swiftly. Her proactive approach to problem-solving, evident in her self-learning of tools like Figma, has significantly contributed to our team's success.
			
				One of PK's standout qualities is her resourcefulness. When faced with unfamiliar challenges, she takes the initiative to independently acquire the necessary skills very fast. Her initiative extends beyond individual growth, as she played a pivotal role in making a whole design system in a very short time, showcasing her leadership and innovation.

				I sincerely hope she receives the recognition she deserves and secures a well-deserved job offer that reflects her skills and contributions.
			`,
		},
		{
			id: "referrer4",
			name: "RJ Burnham",
			position: "Founder & CEO at Consig AI | Geek, Builder, and Advisor",
			relationship: "February 25, 2024, RJ was senior to PK",
			image: "https://media.licdn.com/dms/image/v2/D4D03AQEWgrXm60jYnA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1669043579317?e=1731542400&v=beta&t=cOFF2UAwKGwfWI7yBFk9MnjYg2sR5N-ZYi3rcgYxlz4",
			recommendation: `I had the distinct pleasure of working with PK Boonpeng at Plum Voice, where I joined as President and CTO. Despite being one of the newer members of our team, PK immediately stood out due to her remarkable eagerness to learn and proactive approach in contributing to various projects.

				PK possesses a rare and invaluable blend of skills that make her a quintessential full-stack developer. Her keen eye for front-end design is nothing short of amazing, seamlessly blending aesthetics with user experience. She has an intuitive understanding of how to make interfaces engaging and accessible. During my tenure, I was particularly impressed with her transition into back-end development, where she exhibited the same level of competence and dedication.

				Her contributions at Plum Voice have been significant and multifaceted. From enhancing core products and internal tool web apps using cutting-edge technologies like Figma, Vue.js, and Laravel, to initiating complex Node.js applications, PK has demonstrated her technical versatility and capacity for innovation. Her work in developing a data analysis web app showcases her ability to translate complex data into digestible and actionable insights.

				Beyond her technical abilities, PK's work ethic and team spirit truly set her apart. She is not only quick to assist her colleagues but also eager to take on new challenges, making her an invaluable asset to any team. Her ability to handle heavy workloads and prioritize tasks effectively has consistently led to the timely and successful completion of projects.

				PK's passion for software development and commitment to excellence are palpable in every project she undertakes. She is a rising star in the field, and I have no doubt that she will continue to excel and innovate in her future endeavors. I wholeheartedly recommend PK to any organization looking for a dedicated, talented, and forward-thinking developer. She is not just a great team player but a genuine asset to any team lucky enough to have her.
			`,
		},
		{
			id: "referrer5",
			name: "Andreea Olea",
			position: "Technology Leader | Gen-AI Nerd",
			relationship: "February 23, 2024, Andreea was senior to PK",
			image: "https://media.licdn.com/dms/image/v2/D4E03AQHAvLYqied0OQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718233000849?e=1731542400&v=beta&t=zoBUIVeIO3oUJS3W4Zn-9Dzsa-c_ZoHN8AasITA5llo",
			recommendation: `It has been a privilege to watch PK's remarkable career growth over the past couple years, as she quickly moved beyond the expectations of her role as an intern and then front-end dev, into a well-rounded, high-impact software engineer capacity. PK's unique blend of skills, eagerness to learn, and commitment to excellence has made her an indispensable member of our team.

				What stands out most about PK is her ability to lead by example. She's not just a developer; she's a pioneer who set the bar high for front-end excellence across our organization. Her leadership in creating a comprehensive UI/UX Design System transformed our approaches to development, ensuring consistency and enhancing efficiency across all teams. This initiative alone speaks volumes of her vision and ability to drive change.

				PK's knack for tackling complex problems with straightforward solutions has been a game-changer for us. Whether it was enhancing our support tools (she single-handedly built both the back-end and front-end of an all-in-one comprehensive internal tool system that offered tremendous help to our support technicians), improving data visualization (she even tackled some highly complex big-data problems), or streamlining and standardizing our front-end practices, PK approached each challenge with a mix of creativity and pragmatism that's rare to find.

				Her collaborative spirit is infectious, and she's always a joy to be around. PK is often the first to offer help or seek out new challenges, making sure she's contributing at her maximum capacity at all times. This proactive attitude, combined with her technical skills, has made her a go-to person for both her peers and leaders.

				In every sense, PK has not only excelled in her role but has also set new standards for what we can achieve as a team. Her impact goes beyond just coding; she's helped shape a more collaborative, innovative, and efficient work culture. I wholeheartedly recommend PK and am excited to see where her talents will take her.
			`,
		},
		{
			id: "referrer6",
			name: "Lindsey Ranaldo",
			position:
				"Director of Product Development at Raxia | UI/UX Development",
			relationship: "April 7, 2023, Lindsey managed PK directly",
			image: "https://media.licdn.com/dms/image/v2/C4D03AQGFR93LLFNPIw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516764622046?e=1731542400&v=beta&t=wxt9av6XqkEhVCp27oXGgmBIRztugtyBVakDwxjuZTU",
			recommendation: `PK is a rising star in the development world. Her job title may be Junior Front-end Developer, but her skills and proven ability is much more than that. As her supervisor, I have had the privilege of witnessing her growth and development firsthand, and I can confidently say that she is an invaluable asset to the team.

				One of PK's greatest strengths is her intelligence. She consistently demonstrates an exceptional ability to analyze complex problems and develop creative solutions. Her insights and recommendations have been instrumental in driving many of Plum’s projects forward.

				PK also has a remarkable eye for detail. Her meticulousness is truly impressive and has earned her the respect and admiration of her colleagues.

				PK is also an incredibly quick learner. She is always eager to take on new challenges and is able to quickly adapt to changing circumstances. Her ability to learn and master new skills has helped her to make valuable contributions to our team in a short amount of time.

				It has been a pleasure to work with PK, and I am confident that she will continue to excel and achieve great success in her career. I wholeheartedly recommend her without hesitation.
			`,
		},
	];
	return (
		<Group className="pb-10">
			<ScrollArea
				scrollbars="x"
				type="hover"
				className="pb-6 -mt-6"
				offsetScrollbars
			>
				<Flex className="gap-6 px-6">
					{referrers.map((referrer) => (
						<ReferrerCard referrer={referrer} key={referrer.id}>
							{referrer.recommendation}
						</ReferrerCard>
					))}
				</Flex>
			</ScrollArea>
		</Group>
	);
}
