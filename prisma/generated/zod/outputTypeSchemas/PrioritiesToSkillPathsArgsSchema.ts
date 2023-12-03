import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillPathsSelectSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsSelectSchema';
import { PrioritiesToSkillPathsIncludeSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsIncludeSchema';

export const PrioritiesToSkillPathsArgsSchema: z.ZodType<Prisma.PrioritiesToSkillPathsDefaultArgs> = z.object({
  select: z.lazy(() => PrioritiesToSkillPathsSelectSchema).optional(),
  include: z.lazy(() => PrioritiesToSkillPathsIncludeSchema).optional(),
}).strict();

export default PrioritiesToSkillPathsArgsSchema;
