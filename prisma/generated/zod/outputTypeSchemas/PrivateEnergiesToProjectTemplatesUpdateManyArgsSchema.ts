import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectTemplatesUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesUpdateManyMutationInputSchema'
import { PrivateEnergiesToProjectTemplatesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesUncheckedUpdateManyInputSchema'
import { PrivateEnergiesToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesWhereInputSchema'

export const PrivateEnergiesToProjectTemplatesUpdateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUpdateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToProjectTemplatesUpdateManyMutationInputSchema,PrivateEnergiesToProjectTemplatesUncheckedUpdateManyInputSchema ]),
  where: PrivateEnergiesToProjectTemplatesWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToProjectTemplatesUpdateManyArgsSchema;
