import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsIncludeSchema'
import { PrivateEnergiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsWhereInputSchema'
import { PrivateEnergiesToPrivateTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsOrderByWithRelationInputSchema'
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsWhereUniqueInputSchema'
import { PrivateEnergiesToPrivateTagsScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsScalarFieldEnumSchema'
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateEnergiesToPrivateTagsSelectSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsSelect> = z.object({
  energyId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
}).strict()

export const PrivateEnergiesToPrivateTagsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsFindFirstOrThrowArgs> = z.object({
  select: PrivateEnergiesToPrivateTagsSelectSchema.optional(),
  include: PrivateEnergiesToPrivateTagsIncludeSchema.optional(),
  where: PrivateEnergiesToPrivateTagsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToPrivateTagsOrderByWithRelationInputSchema.array(),PrivateEnergiesToPrivateTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToPrivateTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateEnergiesToPrivateTagsScalarFieldEnumSchema,PrivateEnergiesToPrivateTagsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateEnergiesToPrivateTagsFindFirstOrThrowArgsSchema;
