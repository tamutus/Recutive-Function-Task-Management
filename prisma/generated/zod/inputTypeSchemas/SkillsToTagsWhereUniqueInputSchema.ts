import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsSkillIdTagIdCompoundUniqueInputSchema } from './SkillsToTagsSkillIdTagIdCompoundUniqueInputSchema';
import { SkillsToTagsWhereInputSchema } from './SkillsToTagsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { SkillRelationFilterSchema } from './SkillRelationFilterSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const SkillsToTagsWhereUniqueInputSchema: z.ZodType<Prisma.SkillsToTagsWhereUniqueInput> = z.object({
  skillId_tagId: z.lazy(() => SkillsToTagsSkillIdTagIdCompoundUniqueInputSchema)
})
.and(z.object({
  skillId_tagId: z.lazy(() => SkillsToTagsSkillIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => SkillsToTagsWhereInputSchema),z.lazy(() => SkillsToTagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToTagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToTagsWhereInputSchema),z.lazy(() => SkillsToTagsWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skill: z.union([ z.lazy(() => SkillRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
  tagger: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict());

export default SkillsToTagsWhereUniqueInputSchema;
