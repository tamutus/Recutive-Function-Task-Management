import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutSkillPathsInputSchema } from './PersonUpdateWithoutSkillPathsInputSchema';
import { PersonUncheckedUpdateWithoutSkillPathsInputSchema } from './PersonUncheckedUpdateWithoutSkillPathsInputSchema';
import { PersonCreateWithoutSkillPathsInputSchema } from './PersonCreateWithoutSkillPathsInputSchema';
import { PersonUncheckedCreateWithoutSkillPathsInputSchema } from './PersonUncheckedCreateWithoutSkillPathsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutSkillPathsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutSkillPathsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutSkillPathsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutSkillPathsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillPathsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillPathsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutSkillPathsInputSchema;
