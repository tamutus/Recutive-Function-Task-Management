import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateNestedOneWithoutSkillsInputSchema } from './TaskTemplateCreateNestedOneWithoutSkillsInputSchema';

export const SkillsToTaskTemplatesCreateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCreateWithoutSkillInput> = z.object({
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export default SkillsToTaskTemplatesCreateWithoutSkillInputSchema;
