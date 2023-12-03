import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToSkillsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsWhereInputSchema'

export const PrivateEnergiesToSkillsDeleteManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsDeleteManyArgs> = z.object({
  where: PrivateEnergiesToSkillsWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToSkillsDeleteManyArgsSchema;
