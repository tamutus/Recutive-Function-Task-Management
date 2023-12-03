import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsPersonIdSkillIdCompoundUniqueInputSchema } from './PersonsToSkillPathsPersonIdSkillIdCompoundUniqueInputSchema';
import { PersonsToSkillPathsWhereInputSchema } from './PersonsToSkillPathsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { SkillPathRelationFilterSchema } from './SkillPathRelationFilterSchema';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';

export const PersonsToSkillPathsWhereUniqueInputSchema: z.ZodType<Prisma.PersonsToSkillPathsWhereUniqueInput> = z.object({
  personId_skillId: z.lazy(() => PersonsToSkillPathsPersonIdSkillIdCompoundUniqueInputSchema)
})
.and(z.object({
  personId_skillId: z.lazy(() => PersonsToSkillPathsPersonIdSkillIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PersonsToSkillPathsWhereInputSchema),z.lazy(() => PersonsToSkillPathsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToSkillPathsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToSkillPathsWhereInputSchema),z.lazy(() => PersonsToSkillPathsWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  skillPath: z.union([ z.lazy(() => SkillPathRelationFilterSchema),z.lazy(() => SkillPathWhereInputSchema) ]).optional(),
}).strict());

export default PersonsToSkillPathsWhereUniqueInputSchema;
