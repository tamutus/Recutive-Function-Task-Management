import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { SkillRelationFilterSchema } from './SkillRelationFilterSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const PersonsToSkillsWhereInputSchema: z.ZodType<Prisma.PersonsToSkillsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToSkillsWhereInputSchema),z.lazy(() => PersonsToSkillsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToSkillsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToSkillsWhereInputSchema),z.lazy(() => PersonsToSkillsWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  skill: z.union([ z.lazy(() => SkillRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
}).strict();

export default PersonsToSkillsWhereInputSchema;
