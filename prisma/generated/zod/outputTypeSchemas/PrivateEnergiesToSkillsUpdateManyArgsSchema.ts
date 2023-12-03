import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToSkillsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsUpdateManyMutationInputSchema'
import { PrivateEnergiesToSkillsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsUncheckedUpdateManyInputSchema'
import { PrivateEnergiesToSkillsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToSkillsWhereInputSchema'

export const PrivateEnergiesToSkillsUpdateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpdateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToSkillsUpdateManyMutationInputSchema,PrivateEnergiesToSkillsUncheckedUpdateManyInputSchema ]),
  where: PrivateEnergiesToSkillsWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToSkillsUpdateManyArgsSchema;
