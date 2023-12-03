import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToSkillsUpdateManyMutationInputSchema } from '../inputTypeSchemas/EnergiesToSkillsUpdateManyMutationInputSchema'
import { EnergiesToSkillsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EnergiesToSkillsUncheckedUpdateManyInputSchema'
import { EnergiesToSkillsWhereInputSchema } from '../inputTypeSchemas/EnergiesToSkillsWhereInputSchema'

export const EnergiesToSkillsUpdateManyArgsSchema: z.ZodType<Prisma.EnergiesToSkillsUpdateManyArgs> = z.object({
  data: z.union([ EnergiesToSkillsUpdateManyMutationInputSchema,EnergiesToSkillsUncheckedUpdateManyInputSchema ]),
  where: EnergiesToSkillsWhereInputSchema.optional(),
}).strict()

export default EnergiesToSkillsUpdateManyArgsSchema;
