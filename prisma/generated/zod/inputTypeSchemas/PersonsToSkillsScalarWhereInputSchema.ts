import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const PersonsToSkillsScalarWhereInputSchema: z.ZodType<Prisma.PersonsToSkillsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToSkillsScalarWhereInputSchema),z.lazy(() => PersonsToSkillsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToSkillsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToSkillsScalarWhereInputSchema),z.lazy(() => PersonsToSkillsScalarWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PersonsToSkillsScalarWhereInputSchema;
