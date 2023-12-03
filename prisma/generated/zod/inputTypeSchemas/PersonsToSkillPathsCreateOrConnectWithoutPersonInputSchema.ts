import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsWhereUniqueInputSchema } from './PersonsToSkillPathsWhereUniqueInputSchema';
import { PersonsToSkillPathsCreateWithoutPersonInputSchema } from './PersonsToSkillPathsCreateWithoutPersonInputSchema';
import { PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema } from './PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema';

export const PersonsToSkillPathsCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonsToSkillPathsCreateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToSkillPathsCreateOrConnectWithoutPersonInputSchema;
