import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnergyRelationFilterSchema } from './EnergyRelationFilterSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { PrivateTagRelationFilterSchema } from './PrivateTagRelationFilterSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const EnergiesToPrivateTagsWhereInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToPrivateTagsWhereInputSchema),z.lazy(() => EnergiesToPrivateTagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToPrivateTagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToPrivateTagsWhereInputSchema),z.lazy(() => EnergiesToPrivateTagsWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  energy: z.union([ z.lazy(() => EnergyRelationFilterSchema),z.lazy(() => EnergyWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => PrivateTagRelationFilterSchema),z.lazy(() => PrivateTagWhereInputSchema) ]).optional(),
}).strict();

export default EnergiesToPrivateTagsWhereInputSchema;
