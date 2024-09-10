import { Center, Title } from "@mantine/core";

export default function HeaderSection() {
	return (
		<>
			<Center className="flex flex-col h-screen mx-auto gap-4 max-w-[18.75rem] sm:max-w-[30.75rem]">
				<Title
					order={1}
					className="text-primary-100 text-center text-5xl sm:text-[5rem]"
				>
					PK Boonpeng
				</Title>
				<div className="w-fit sm:w-full grid sm:flex text-center self-center justify-between text-secondary-400 gap-y-.5">
					<Title order={2} className="text-lg sm:text-[1.375rem]">
						Front-end Software Engineer
					</Title>
					<Title order={2} className="text-lg sm:text-[1.375rem]">
						UI/UX Designer
					</Title>
				</div>
			</Center>
		</>
	);
}
