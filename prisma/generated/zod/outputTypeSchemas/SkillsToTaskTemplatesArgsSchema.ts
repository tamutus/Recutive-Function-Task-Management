import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTaskTemplatesSelectSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesSelectSchema';
import { SkillsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesIncludeSchema';

export const SkillsToTaskTemplatesArgsSchema: z.ZodType<Prisma.SkillsToTaskTemplatesDefaultArgs> = z.object({
  select: z.lazy(() => SkillsToTaskTemplatesSelectSchema).optional(),
  include: z.lazy(() => SkillsToTaskTemplatesIncludeSchema).optional(),
}).strict();

export default SkillsToTaskTemplatesArgsSchema;
