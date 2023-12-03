import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToSkillsWhereInputSchema } from '../inputTypeSchemas/EnergiesToSkillsWhereInputSchema'

export const EnergiesToSkillsDeleteManyArgsSchema: z.ZodType<Prisma.EnergiesToSkillsDeleteManyArgs> = z.object({
  where: EnergiesToSkillsWhereInputSchema.optional(),
}).strict()

export default EnergiesToSkillsDeleteManyArgsSchema;
