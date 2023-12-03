import { z } from 'zod';

export const SkillStatusSchema = z.enum(['DISLIKES','WANTS','HELP','LEARNING','HAS','MENTOR','EXPERT']);

export type SkillStatusType = `${z.infer<typeof SkillStatusSchema>}`

export default SkillStatusSchema;
