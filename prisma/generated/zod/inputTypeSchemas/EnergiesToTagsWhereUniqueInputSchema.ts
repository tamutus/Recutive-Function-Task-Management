import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsEnergyIdTagIdCompoundUniqueInputSchema } from './EnergiesToTagsEnergyIdTagIdCompoundUniqueInputSchema';
import { EnergiesToTagsWhereInputSchema } from './EnergiesToTagsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnergyRelationFilterSchema } from './EnergyRelationFilterSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const EnergiesToTagsWhereUniqueInputSchema: z.ZodType<Prisma.EnergiesToTagsWhereUniqueInput> = z.object({
  energyId_tagId: z.lazy(() => EnergiesToTagsEnergyIdTagIdCompoundUniqueInputSchema)
})
.and(z.object({
  energyId_tagId: z.lazy(() => EnergiesToTagsEnergyIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => EnergiesToTagsWhereInputSchema),z.lazy(() => EnergiesToTagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToTagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToTagsWhereInputSchema),z.lazy(() => EnergiesToTagsWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  energy: z.union([ z.lazy(() => EnergyRelationFilterSchema),z.lazy(() => EnergyWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
  tagger: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict());

export default EnergiesToTagsWhereUniqueInputSchema;
