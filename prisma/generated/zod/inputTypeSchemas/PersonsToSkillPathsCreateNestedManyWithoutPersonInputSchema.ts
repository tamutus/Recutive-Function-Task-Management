import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsCreateWithoutPersonInputSchema } from './PersonsToSkillPathsCreateWithoutPersonInputSchema';
import { PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema } from './PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema';
import { PersonsToSkillPathsCreateOrConnectWithoutPersonInputSchema } from './PersonsToSkillPathsCreateOrConnectWithoutPersonInputSchema';
import { PersonsToSkillPathsCreateManyPersonInputEnvelopeSchema } from './PersonsToSkillPathsCreateManyPersonInputEnvelopeSchema';
import { PersonsToSkillPathsWhereUniqueInputSchema } from './PersonsToSkillPathsWhereUniqueInputSchema';

export const PersonsToSkillPathsCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToSkillPathsCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToSkillPathsCreateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsCreateWithoutPersonInputSchema).array(),z.lazy(() => PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToSkillPathsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PersonsToSkillPathsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToSkillPathsCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PersonsToSkillPathsCreateNestedManyWithoutPersonInputSchema;
