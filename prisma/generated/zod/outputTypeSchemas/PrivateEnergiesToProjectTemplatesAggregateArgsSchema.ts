import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesWhereInputSchema'
import { PrivateEnergiesToProjectTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesOrderByWithRelationInputSchema'
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema'

export const PrivateEnergiesToProjectTemplatesAggregateArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesAggregateArgs> = z.object({
  where: PrivateEnergiesToProjectTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToProjectTemplatesOrderByWithRelationInputSchema.array(),PrivateEnergiesToProjectTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateEnergiesToProjectTemplatesAggregateArgsSchema;
