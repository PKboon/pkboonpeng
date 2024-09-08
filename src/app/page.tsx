import GlowSkillChip from "@/components/GlowSkillChip";

export default function Home() {
    return (
        <div className="flex gap-4">
            <GlowSkillChip label="RESTful APIs development" type="tool" />
            <GlowSkillChip label="yay" type="technical" />
            <GlowSkillChip label="yay" type="langframe" />
            <GlowSkillChip label="yay" type="plugin" />
        </div>
    );
}
