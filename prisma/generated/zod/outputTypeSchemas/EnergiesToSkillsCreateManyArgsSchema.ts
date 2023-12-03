import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToSkillsCreateManyInputSchema } from '../inputTypeSchemas/EnergiesToSkillsCreateManyInputSchema'

export const EnergiesToSkillsCreateManyArgsSchema: z.ZodType<Prisma.EnergiesToSkillsCreateManyArgs> = z.object({
  data: z.union([ EnergiesToSkillsCreateManyInputSchema,EnergiesToSkillsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default EnergiesToSkillsCreateManyArgsSchema;
