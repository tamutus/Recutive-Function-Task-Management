import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToSkillsSelectSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsSelectSchema';
import { PrivateEnergiesToSkillsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsIncludeSchema';

export const PrivateEnergiesToSkillsArgsSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsDefaultArgs> = z.object({
  select: z.lazy(() => PrivateEnergiesToSkillsSelectSchema).optional(),
  include: z.lazy(() => PrivateEnergiesToSkillsIncludeSchema).optional(),
}).strict();

export default PrivateEnergiesToSkillsArgsSchema;
