import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathSelectSchema } from '../inputTypeSchemas/SkillPathSelectSchema';
import { SkillPathIncludeSchema } from '../inputTypeSchemas/SkillPathIncludeSchema';

export const SkillPathArgsSchema: z.ZodType<Prisma.SkillPathDefaultArgs> = z.object({
  select: z.lazy(() => SkillPathSelectSchema).optional(),
  include: z.lazy(() => SkillPathIncludeSchema).optional(),
}).strict();

export default SkillPathArgsSchema;
