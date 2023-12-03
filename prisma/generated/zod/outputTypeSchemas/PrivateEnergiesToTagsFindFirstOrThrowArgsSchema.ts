import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTagsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsIncludeSchema'
import { PrivateEnergiesToTagsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsWhereInputSchema'
import { PrivateEnergiesToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsOrderByWithRelationInputSchema'
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsWhereUniqueInputSchema'
import { PrivateEnergiesToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsScalarFieldEnumSchema'
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateEnergiesToTagsSelectSchema: z.ZodType<Prisma.PrivateEnergiesToTagsSelect> = z.object({
  energyId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export const PrivateEnergiesToTagsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTagsFindFirstOrThrowArgs> = z.object({
  select: PrivateEnergiesToTagsSelectSchema.optional(),
  include: PrivateEnergiesToTagsIncludeSchema.optional(),
  where: PrivateEnergiesToTagsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToTagsOrderByWithRelationInputSchema.array(),PrivateEnergiesToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateEnergiesToTagsScalarFieldEnumSchema,PrivateEnergiesToTagsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateEnergiesToTagsFindFirstOrThrowArgsSchema;
