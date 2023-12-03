import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesIncludeSchema'
import { PrivateEnergiesToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesWhereInputSchema'
import { PrivateEnergiesToProjectTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesOrderByWithRelationInputSchema'
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema'
import { PrivateEnergiesToProjectTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesScalarFieldEnumSchema'
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrivateEnergiesToProjectTemplatesSelectSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesSelect> = z.object({
  projectId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
}).strict()

export const PrivateEnergiesToProjectTemplatesFindFirstArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesFindFirstArgs> = z.object({
  select: PrivateEnergiesToProjectTemplatesSelectSchema.optional(),
  include: PrivateEnergiesToProjectTemplatesIncludeSchema.optional(),
  where: PrivateEnergiesToProjectTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PrivateEnergiesToProjectTemplatesOrderByWithRelationInputSchema.array(),PrivateEnergiesToProjectTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrivateEnergiesToProjectTemplatesScalarFieldEnumSchema,PrivateEnergiesToProjectTemplatesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PrivateEnergiesToProjectTemplatesFindFirstArgsSchema;
