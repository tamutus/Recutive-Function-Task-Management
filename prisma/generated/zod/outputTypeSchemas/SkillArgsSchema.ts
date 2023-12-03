import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillSelectSchema } from '../inputTypeSchemas/SkillSelectSchema';
import { SkillIncludeSchema } from '../inputTypeSchemas/SkillIncludeSchema';

export const SkillArgsSchema: z.ZodType<Prisma.SkillDefaultArgs> = z.object({
  select: z.lazy(() => SkillSelectSchema).optional(),
  include: z.lazy(() => SkillIncludeSchema).optional(),
}).strict();

export default SkillArgsSchema;
