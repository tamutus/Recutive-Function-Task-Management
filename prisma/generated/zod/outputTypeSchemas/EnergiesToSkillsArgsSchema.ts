import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToSkillsSelectSchema } from '../inputTypeSchemas/EnergiesToSkillsSelectSchema';
import { EnergiesToSkillsIncludeSchema } from '../inputTypeSchemas/EnergiesToSkillsIncludeSchema';

export const EnergiesToSkillsArgsSchema: z.ZodType<Prisma.EnergiesToSkillsDefaultArgs> = z.object({
  select: z.lazy(() => EnergiesToSkillsSelectSchema).optional(),
  include: z.lazy(() => EnergiesToSkillsIncludeSchema).optional(),
}).strict();

export default EnergiesToSkillsArgsSchema;
