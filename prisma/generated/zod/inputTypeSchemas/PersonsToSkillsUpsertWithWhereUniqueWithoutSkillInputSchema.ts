import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsWhereUniqueInputSchema } from './PersonsToSkillsWhereUniqueInputSchema';
import { PersonsToSkillsUpdateWithoutSkillInputSchema } from './PersonsToSkillsUpdateWithoutSkillInputSchema';
import { PersonsToSkillsUncheckedUpdateWithoutSkillInputSchema } from './PersonsToSkillsUncheckedUpdateWithoutSkillInputSchema';
import { PersonsToSkillsCreateWithoutSkillInputSchema } from './PersonsToSkillsCreateWithoutSkillInputSchema';
import { PersonsToSkillsUncheckedCreateWithoutSkillInputSchema } from './PersonsToSkillsUncheckedCreateWithoutSkillInputSchema';

export const PersonsToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.PersonsToSkillsUpsertWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PersonsToSkillsUpdateWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsUncheckedUpdateWithoutSkillInputSchema) ]),
  create: z.union([ z.lazy(() => PersonsToSkillsCreateWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default PersonsToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema;
