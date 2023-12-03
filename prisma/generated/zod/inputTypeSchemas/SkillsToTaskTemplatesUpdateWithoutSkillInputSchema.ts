import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateOneRequiredWithoutSkillsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutSkillsNestedInputSchema';

export const SkillsToTaskTemplatesUpdateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUpdateWithoutSkillInput> = z.object({
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export default SkillsToTaskTemplatesUpdateWithoutSkillInputSchema;
