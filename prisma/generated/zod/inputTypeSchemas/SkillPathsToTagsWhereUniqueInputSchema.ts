import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsSkillIdTagIdCompoundUniqueInputSchema } from './SkillPathsToTagsSkillIdTagIdCompoundUniqueInputSchema';
import { SkillPathsToTagsWhereInputSchema } from './SkillPathsToTagsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { SkillPathRelationFilterSchema } from './SkillPathRelationFilterSchema';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const SkillPathsToTagsWhereUniqueInputSchema: z.ZodType<Prisma.SkillPathsToTagsWhereUniqueInput> = z.object({
  skillId_tagId: z.lazy(() => SkillPathsToTagsSkillIdTagIdCompoundUniqueInputSchema)
})
.and(z.object({
  skillId_tagId: z.lazy(() => SkillPathsToTagsSkillIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => SkillPathsToTagsWhereInputSchema),z.lazy(() => SkillPathsToTagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillPathsToTagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillPathsToTagsWhereInputSchema),z.lazy(() => SkillPathsToTagsWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skill: z.union([ z.lazy(() => SkillPathRelationFilterSchema),z.lazy(() => SkillPathWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
  tagger: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict());

export default SkillPathsToTagsWhereUniqueInputSchema;
