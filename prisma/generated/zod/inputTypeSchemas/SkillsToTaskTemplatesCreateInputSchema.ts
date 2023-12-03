import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreateNestedOneWithoutSkillsInputSchema } from './TaskTemplateCreateNestedOneWithoutSkillsInputSchema';
import { SkillCreateNestedOneWithoutTaskTemplatesInputSchema } from './SkillCreateNestedOneWithoutTaskTemplatesInputSchema';

export const SkillsToTaskTemplatesCreateInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCreateInput> = z.object({
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutSkillsInputSchema),
  skill: z.lazy(() => SkillCreateNestedOneWithoutTaskTemplatesInputSchema)
}).strict();

export default SkillsToTaskTemplatesCreateInputSchema;
