import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToSkillsCreateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsCreateManyInputSchema'

export const PrivateEnergiesToSkillsCreateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsCreateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToSkillsCreateManyInputSchema,PrivateEnergiesToSkillsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateEnergiesToSkillsCreateManyArgsSchema;
