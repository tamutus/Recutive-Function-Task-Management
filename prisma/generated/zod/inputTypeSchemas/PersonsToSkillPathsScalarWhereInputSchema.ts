import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const PersonsToSkillPathsScalarWhereInputSchema: z.ZodType<Prisma.PersonsToSkillPathsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToSkillPathsScalarWhereInputSchema),z.lazy(() => PersonsToSkillPathsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToSkillPathsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToSkillPathsScalarWhereInputSchema),z.lazy(() => PersonsToSkillPathsScalarWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PersonsToSkillPathsScalarWhereInputSchema;
