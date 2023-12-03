import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsEnergyIdTagIdCompoundUniqueInputSchema } from './PrivateEnergiesToPrivateTagsEnergyIdTagIdCompoundUniqueInputSchema';
import { PrivateEnergiesToPrivateTagsWhereInputSchema } from './PrivateEnergiesToPrivateTagsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PrivateEnergyRelationFilterSchema } from './PrivateEnergyRelationFilterSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { PrivateTagRelationFilterSchema } from './PrivateTagRelationFilterSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateEnergiesToPrivateTagsWhereUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsWhereUniqueInput> = z.object({
  energyId_tagId: z.lazy(() => PrivateEnergiesToPrivateTagsEnergyIdTagIdCompoundUniqueInputSchema)
})
.and(z.object({
  energyId_tagId: z.lazy(() => PrivateEnergiesToPrivateTagsEnergyIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energy: z.union([ z.lazy(() => PrivateEnergyRelationFilterSchema),z.lazy(() => PrivateEnergyWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => PrivateTagRelationFilterSchema),z.lazy(() => PrivateTagWhereInputSchema) ]).optional(),
}).strict());

export default PrivateEnergiesToPrivateTagsWhereUniqueInputSchema;
