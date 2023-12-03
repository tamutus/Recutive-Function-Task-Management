import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutTaskTemplatesInputSchema } from './SkillCreateNestedOneWithoutTaskTemplatesInputSchema';

export const SkillsToTaskTemplatesCreateWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCreateWithoutTaskInput> = z.object({
  skill: z.lazy(() => SkillCreateNestedOneWithoutTaskTemplatesInputSchema)
}).strict();

export default SkillsToTaskTemplatesCreateWithoutTaskInputSchema;
