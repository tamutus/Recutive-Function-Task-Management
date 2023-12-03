import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsEnergyIdTagIdCompoundUniqueInputSchema } from './PrivateEnergiesToTagsEnergyIdTagIdCompoundUniqueInputSchema';
import { PrivateEnergiesToTagsWhereInputSchema } from './PrivateEnergiesToTagsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PrivateEnergyRelationFilterSchema } from './PrivateEnergyRelationFilterSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const PrivateEnergiesToTagsWhereUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsWhereUniqueInput> = z.object({
  energyId_tagId: z.lazy(() => PrivateEnergiesToTagsEnergyIdTagIdCompoundUniqueInputSchema)
})
.and(z.object({
  energyId_tagId: z.lazy(() => PrivateEnergiesToTagsEnergyIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrivateEnergiesToTagsWhereInputSchema),z.lazy(() => PrivateEnergiesToTagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToTagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToTagsWhereInputSchema),z.lazy(() => PrivateEnergiesToTagsWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energy: z.union([ z.lazy(() => PrivateEnergyRelationFilterSchema),z.lazy(() => PrivateEnergyWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
}).strict());

export default PrivateEnergiesToTagsWhereUniqueInputSchema;
