import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { PrivateEnergyRelationFilterSchema } from './PrivateEnergyRelationFilterSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { PrivateTagRelationFilterSchema } from './PrivateTagRelationFilterSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateEnergiesToPrivateTagsWhereInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energy: z.union([ z.lazy(() => PrivateEnergyRelationFilterSchema),z.lazy(() => PrivateEnergyWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => PrivateTagRelationFilterSchema),z.lazy(() => PrivateTagWhereInputSchema) ]).optional(),
}).strict();

export default PrivateEnergiesToPrivateTagsWhereInputSchema;
