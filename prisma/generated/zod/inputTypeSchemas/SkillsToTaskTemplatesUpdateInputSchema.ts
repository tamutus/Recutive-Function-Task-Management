import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateOneRequiredWithoutSkillsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutSkillsNestedInputSchema';
import { SkillUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema } from './SkillUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema';

export const SkillsToTaskTemplatesUpdateInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUpdateInput> = z.object({
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutSkillsNestedInputSchema).optional(),
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema).optional()
}).strict();

export default SkillsToTaskTemplatesUpdateInputSchema;
