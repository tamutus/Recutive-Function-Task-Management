import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema } from './SkillUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema';

export const SkillsToTaskTemplatesUpdateWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUpdateWithoutTaskInput> = z.object({
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema).optional()
}).strict();

export default SkillsToTaskTemplatesUpdateWithoutTaskInputSchema;
