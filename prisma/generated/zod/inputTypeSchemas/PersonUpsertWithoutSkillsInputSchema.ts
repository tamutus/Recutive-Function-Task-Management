import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutSkillsInputSchema } from './PersonUpdateWithoutSkillsInputSchema';
import { PersonUncheckedUpdateWithoutSkillsInputSchema } from './PersonUncheckedUpdateWithoutSkillsInputSchema';
import { PersonCreateWithoutSkillsInputSchema } from './PersonCreateWithoutSkillsInputSchema';
import { PersonUncheckedCreateWithoutSkillsInputSchema } from './PersonUncheckedCreateWithoutSkillsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutSkillsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutSkillsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutSkillsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutSkillsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutSkillsInputSchema;
