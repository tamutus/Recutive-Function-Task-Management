import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillsSelectSchema } from '../inputTypeSchemas/PrioritiesToSkillsSelectSchema';
import { PrioritiesToSkillsIncludeSchema } from '../inputTypeSchemas/PrioritiesToSkillsIncludeSchema';

export const PrioritiesToSkillsArgsSchema: z.ZodType<Prisma.PrioritiesToSkillsDefaultArgs> = z.object({
  select: z.lazy(() => PrioritiesToSkillsSelectSchema).optional(),
  include: z.lazy(() => PrioritiesToSkillsIncludeSchema).optional(),
}).strict();

export default PrioritiesToSkillsArgsSchema;
