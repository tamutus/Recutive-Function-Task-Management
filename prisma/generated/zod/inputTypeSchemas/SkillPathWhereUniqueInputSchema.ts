import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { SkillsToSkillPathsListRelationFilterSchema } from './SkillsToSkillPathsListRelationFilterSchema';
import { PersonsToSkillPathsListRelationFilterSchema } from './PersonsToSkillPathsListRelationFilterSchema';
import { SkillPathsToTagsListRelationFilterSchema } from './SkillPathsToTagsListRelationFilterSchema';
import { PrioritiesToSkillPathsListRelationFilterSchema } from './PrioritiesToSkillPathsListRelationFilterSchema';

export const SkillPathWhereUniqueInputSchema: z.ZodType<Prisma.SkillPathWhereUniqueInput> = z.object({
  id: z.number()
})
.and(z.object({
  id: z.number().optional(),
  AND: z.union([ z.lazy(() => SkillPathWhereInputSchema),z.lazy(() => SkillPathWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillPathWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillPathWhereInputSchema),z.lazy(() => SkillPathWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  skills: z.lazy(() => SkillsToSkillPathsListRelationFilterSchema).optional(),
  students: z.lazy(() => PersonsToSkillPathsListRelationFilterSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsListRelationFilterSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsListRelationFilterSchema).optional()
}).strict());

export default SkillPathWhereUniqueInputSchema;
