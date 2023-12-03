import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsUpdateManyMutationInputSchema'
import { PrivateEnergiesToProjectsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsUncheckedUpdateManyInputSchema'
import { PrivateEnergiesToProjectsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsWhereInputSchema'

export const PrivateEnergiesToProjectsUpdateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUpdateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToProjectsUpdateManyMutationInputSchema,PrivateEnergiesToProjectsUncheckedUpdateManyInputSchema ]),
  where: PrivateEnergiesToProjectsWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToProjectsUpdateManyArgsSchema;
