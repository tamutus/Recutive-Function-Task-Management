import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesIncludeSchema'
import { EnergiesToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesWhereInputSchema'
import { EnergiesToProjectTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesOrderByWithRelationInputSchema'
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesWhereUniqueInputSchema'
import { EnergiesToProjectTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesScalarFieldEnumSchema'
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EnergiesToProjectTemplatesSelectSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesSelect> = z.object({
  projectId: z.boolean().optional(),
  energyId: z.boolean().optional(),
  links: z.boolean().optional(),
  info: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
}).strict()

export const EnergiesToProjectTemplatesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesFindFirstOrThrowArgs> = z.object({
  select: EnergiesToProjectTemplatesSelectSchema.optional(),
  include: EnergiesToProjectTemplatesIncludeSchema.optional(),
  where: EnergiesToProjectTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ EnergiesToProjectTemplatesOrderByWithRelationInputSchema.array(),EnergiesToProjectTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: EnergiesToProjectTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EnergiesToProjectTemplatesScalarFieldEnumSchema,EnergiesToProjectTemplatesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default EnergiesToProjectTemplatesFindFirstOrThrowArgsSchema;
